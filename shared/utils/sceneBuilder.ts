import * as THREE from "three";

import { createMaterial, createUShape } from "@/shared/utils/shapeBuilder";

import { CONFIGS } from "../const/shapeConfig";
import { MeshState } from "../interface/Scene";
import { ShapeVariant } from "../interface/Shape";

/**
 * Builds and populates a Three.js scene with all shapes for a given variant.
 *
 * Responsibilities:
 * - Create and add meshes (U-shapes, capsule, sphere) into the scene
 * - Track mesh states for animation (position + scale transitions)
 * - Collect disposer functions for proper memory cleanup
 *
 * @param scene   Three.js scene to populate
 * @param variant Controls layout + sizing (desktop/tablet/mobile)
 *
 * @returns meshStates (for animation system) + disposers (for cleanup)
 */
export const buildScene = (
  scene: THREE.Scene,
  variant: ShapeVariant,
): { meshStates: MeshState[]; disposers: Array<() => void> } => {
  // Load configuration for the given variant
  // Contains layout + geometry parameters for all shapes
  const config = CONFIGS[variant];
  // Collect cleanup functions for all geometries/materials
  const disposers: Array<() => void> = [];
  // Store all created meshes
  const meshes: THREE.Object3D[] = [];

  /**
   * Each entry: [x, y, rotZ]
   * - Position is applied at mesh level (not baked into geometry)
   * - Rotation only around Z axis (2D plane layout)
   */
  config.uShapes.forEach(([x, y, rotZ]) => {
    const { mesh, dispose } = createUShape(x, y, rotZ, variant);
    scene.add(mesh); // Add to scene graph
    meshes.push(mesh); // Track for animation
    disposers.push(dispose); // Track cleanup
  });

  // Capsule
  const { radius, length, position, rotZ } = config.capsule;
  const capsuleGeo = new THREE.CapsuleGeometry(radius, length, 12, 24);
  // Fixed gradient bounds for capsule
  const capsuleMat = createMaterial(-0.45, 0.45);
  const capsule = new THREE.Mesh(capsuleGeo, capsuleMat);
  capsule.position.set(...position);
  capsule.rotation.z = rotZ;
  scene.add(capsule);
  meshes.push(capsule);
  disposers.push(() => {
    capsuleGeo.dispose();
    capsuleMat.dispose();
  });

  // Sphere
  const { radius: sR, position: sPos } = config.sphere;
  const sphereGeo = new THREE.SphereGeometry(sR, 32, 32);
  // Smaller gradient range due to compact geometry
  const sphereMat = createMaterial(-0.2, 0.2);
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.position.set(...sPos);
  scene.add(sphere);
  meshes.push(sphere);
  disposers.push(() => {
    sphereGeo.dispose();
    sphereMat.dispose();
  });

  // Mesh state initialization, each mesh gets a state object used for animations
  const meshStates: MeshState[] = meshes.map((mesh) => ({
    mesh,
    basePos: mesh.position.clone(),
    targetPos: mesh.position.clone(),
    startPos: mesh.position.clone(),
    targetScale: new THREE.Vector3(1, 1, 1),
    startScale: new THREE.Vector3(1, 1, 1),
  }));

  return { meshStates, disposers };
};
