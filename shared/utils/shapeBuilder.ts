import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

import {
  COLOR_A,
  COLOR_B,
  COLOR_C,
  LIGHT_DIR,
  VERTEX_SHADER,
  FRAGMENT_SHADER,
} from "../const/shapeMaterial";
import { ShapeVariant } from "../interface/Shape";

/**
 * Creates a custom shader material with gradient + lighting effect.
 *
 * @param yMin - Minimum Y value of the geometry (used for gradient normalization)
 * @param yMax - Maximum Y value of the geometry (used for gradient normalization)
 */
export const createMaterial = (yMin: number, yMax: number): THREE.ShaderMaterial =>
  new THREE.ShaderMaterial({
    uniforms: {
      colorA: { value: COLOR_A.clone() },
      colorB: { value: COLOR_B.clone() },
      colorC: { value: COLOR_C.clone() },
      lightDir: { value: LIGHT_DIR.clone() },
      // Used in fragment shader to normalize Y position into gradient range
      yMin: { value: yMin },
      yMax: { value: yMax },
    },
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER,
    transparent: true, // Enable alpha blending (important if gradient uses transparency)
    side: THREE.FrontSide, // Render only front faces
  });

/**
 * X offsets for control points that define the U-shape curve.
 * Each variant adjusts the "width" and curvature of the U.
 * - Only X changes per variant
 * - Y is shared across all variants (see Y_OFFSETS)
 * - Shape is centered around LOCAL origin (0,0,0)
 */
const U_SHAPE_X_OFFSETS: Record<ShapeVariant, number[]> = {
  desktop: [-0.25, -0.38, -0.42, -0.28, 0, 0.28, 0.42, 0.38, 0.25],
  tablet: [-0.2, -0.25, -0.24, -0.16, 0, 0.16, 0.24, 0.25, 0.2],
  mobile: [-0.15, -0.19, -0.19, -0.13, 0, 0.13, 0.19, 0.19, 0.15],
};

const Y_OFFSETS = [0.6, 0.3, -0.05, -0.32, -0.42, -0.32, -0.05, 0.3, 0.6];

// Tube thickness per variant
const TUBE_RADIUS_MAP: Record<ShapeVariant, number> = {
  desktop: 0.2,
  tablet: 0.12,
  mobile: 0.08,
};

// Scales the overall height of the U-shape
const HEIGHT_SCALE_MAP: Record<ShapeVariant, number> = {
  desktop: 0.8,
  tablet: 0.5,
  mobile: 0.3,
};

/**
 * Builds a U-shaped 3D tube mesh.
 * - Geometry is centered at LOCAL origin, makes animation/lerping easier
 * - World position is applied via mesh.position (NOT baked into geometry)
 * - Uses CatmullRomCurve3 for smooth interpolation
 * - End caps are added using spheres and merged into one geometry
 *
 * @param x      World X position (set on mesh.position, NOT baked into geometry)
 * @param y      World Y position (set on mesh.position, NOT baked into geometry)
 * @param rotZ   Z-axis rotation in radians
 * @param variant  Controls the width of the U and tube radius
 *
 * @returns mesh + dispose function for manual cleanup
 */
export const createUShape = (
  x: number,
  y: number,
  rotZ: number,
  variant: ShapeVariant = "desktop",
): { mesh: THREE.Mesh; dispose: () => void } => {
  // Get variant-specific parameters
  const HEIGHT_SCALE = HEIGHT_SCALE_MAP[variant];
  const TUBE_RADIUS = TUBE_RADIUS_MAP[variant];
  const xOffsets = U_SHAPE_X_OFFSETS[variant];

  /**
   * Build smooth U-shaped curve using Catmull-Rom spline
   *
   * - Combines X offsets (variant-based) with shared Y offsets
   * - Z is always 0 (2D shape in XY plane)
   * - tension = 0.5, balanced smoothness
   */
  const curve = new THREE.CatmullRomCurve3(
    xOffsets.map((xOff, i) => new THREE.Vector3(xOff, Y_OFFSETS[i] * HEIGHT_SCALE, 0)),
    false,
    "catmullrom",
    0.5, // tension
  );

  // Compute vertical bounds for shader gradient, include tube radius to avoid clipping at edges
  const yMin = -0.42 * HEIGHT_SCALE - TUBE_RADIUS;
  const yMax = 0.6 * HEIGHT_SCALE + TUBE_RADIUS;

  // Create tube geometry along the curve
  const tubeGeo = new THREE.TubeGeometry(curve, 100, TUBE_RADIUS, 20, false);
  // Create spherical caps at both ends of the tube
  const capGeo = new THREE.SphereGeometry(TUBE_RADIUS, 10, 10);
  const capStartGeo = capGeo.clone();
  capStartGeo.translate(...(curve.getPoint(0).toArray() as [number, number, number]));
  const capEndGeo = capGeo.clone();
  capEndGeo.translate(...(curve.getPoint(1).toArray() as [number, number, number]));

  // Merge tube + caps into a single geometry
  const mergedGeometry = mergeGeometries([tubeGeo, capStartGeo, capEndGeo]);

  // Create shader material with gradient + lighting
  const material = createMaterial(yMin, yMax);

  // Final mesh
  const mesh = new THREE.Mesh(mergedGeometry, material);

  // Apply world transform
  mesh.position.set(x, y, 0);
  mesh.rotation.z = rotZ;

  // Clean up
  const dispose = () => {
    tubeGeo.dispose();
    capGeo.dispose();
    capStartGeo.dispose();
    capEndGeo.dispose();
    mergedGeometry.dispose();
    material.dispose();
  };

  return { mesh, dispose };
};
