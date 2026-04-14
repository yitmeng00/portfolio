"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const HomeHeaderBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = el.clientHeight;
    const aspect = W / H;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 10);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(2, 2, 2);
    scene.add(dirLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Each shape gets its own material with its local Y extent
    // so the gradient is always mapped relative to the shape itself
    const createMaterial = (localYMin: number, localYMax: number) =>
      new THREE.ShaderMaterial({
        uniforms: {
          colorA: { value: new THREE.Color("#C9B99A") }, // warm sand (top)
          colorB: { value: new THREE.Color("#70432E") }, // rust brown (mid)
          colorC: { value: new THREE.Color("#3D5C42") }, // earthy green (mid-low)
          colorD: { value: new THREE.Color("#2F403D") }, // deep teal (bottom)
          lightDir: { value: new THREE.Vector3(0.5, 0.8, 1.0).normalize() },
          yMin: { value: localYMin },
          yMax: { value: localYMax },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vViewDir;
          varying float vLocalY;

          void main() {
            // Use local (object-space) position for gradient
            // so it's consistent regardless of where mesh is in world
            vLocalY = position.y;
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vNormal = normalize(normalMatrix * normal);
            vViewDir = normalize(cameraPosition - worldPos.xyz);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 colorA;
          uniform vec3 colorB;
          uniform vec3 colorC;
          uniform vec3 colorD;
          uniform vec3 lightDir;
          uniform float yMin;
          uniform float yMax;

          varying vec3 vNormal;
          varying vec3 vViewDir;
          varying float vLocalY;

          void main() {
            vec3 N = normalize(vNormal);
            vec3 V = normalize(vViewDir);
            vec3 L = normalize(lightDir);

            // Normalize local Y to 0..1 across the shape's actual extent
            float t = clamp((vLocalY - yMin) / (yMax - yMin), 0.0, 1.0);

            // Sharp 4-stop gradient: deep teal → earthy green → rust → warm sand
            vec3 baseColor;
            if (t < 0.33) {
              // bottom third: deep teal → earthy green
              float s = t / 0.33;
              baseColor = mix(colorD, colorC, s);
            } else if (t < 0.66) {
              // middle third: earthy green → rust
              float s = (t - 0.33) / 0.33;
              baseColor = mix(colorC, colorB, s);
            } else {
              // top third: rust → warm sand
              float s = (t - 0.66) / 0.34;
              baseColor = mix(colorB, colorA, s);
            }

            // Diffuse
            float diff = max(dot(N, L), 0.0);
            vec3 col = baseColor * (0.45 + 0.55 * diff);

            // Broad soft specular
            vec3 H = normalize(L + V);
            // Broad soft specular — softer and dimmer
            float spec = pow(max(dot(N, H), 0.0), 40.0);
            col += vec3(1.0, 0.97, 0.93) * spec * 0.3;

            // Fresnel rim glow — neon edge catch
            float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.5);
            col += mix(colorA, vec3(1.0, 0.95, 0.85), 0.4) * fresnel * 0.5;

            // Glass: transparent center, opaque edges
            float alpha = mix(0.5, 0.9, fresnel);

            gl_FragColor = vec4(col, alpha);
          }
        `,
        side: THREE.FrontSide,
      });

    const createUShape = (x: number, y: number, rotZ: number) => {
      const HEIGHT_SCALE = 0.8;
      const TUBE_RADIUS = 0.2;

      const curve = new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-0.25 + x, 0.6 * HEIGHT_SCALE + y, 0),
          new THREE.Vector3(-0.38 + x, 0.3 * HEIGHT_SCALE + y, 0),
          new THREE.Vector3(-0.42 + x, -0.05 * HEIGHT_SCALE + y, 0),
          new THREE.Vector3(-0.28 + x, -0.32 * HEIGHT_SCALE + y, 0),
          new THREE.Vector3(0 + x, -0.42 * HEIGHT_SCALE + y, 0),
          new THREE.Vector3(0.28 + x, -0.32 * HEIGHT_SCALE + y, 0),
          new THREE.Vector3(0.42 + x, -0.05 * HEIGHT_SCALE + y, 0),
          new THREE.Vector3(0.38 + x, 0.3 * HEIGHT_SCALE + y, 0),
          new THREE.Vector3(0.25 + x, 0.6 * HEIGHT_SCALE + y, 0),
        ],
        false,
        "catmullrom",
        0.5,
      );

      const localYMin = -0.42 * HEIGHT_SCALE + y - TUBE_RADIUS;
      const localYMax = 0.6 * HEIGHT_SCALE + y + TUBE_RADIUS;

      // Merge everything into one BufferGeometry — no seam artifacts
      const tubeGeo = new THREE.TubeGeometry(curve, 100, TUBE_RADIUS, 20, false);
      const capGeo = new THREE.SphereGeometry(TUBE_RADIUS, 10, 10);

      const capStartGeo = capGeo.clone();
      const pStart = curve.getPoint(0);
      capStartGeo.translate(pStart.x, pStart.y, pStart.z);

      const capEndGeo = capGeo.clone();
      const pEnd = curve.getPoint(1);
      capEndGeo.translate(pEnd.x, pEnd.y, pEnd.z);

      const merged = mergeGeometries([tubeGeo, capStartGeo, capEndGeo]);

      const mat = createMaterial(localYMin, localYMax);
      const mesh = new THREE.Mesh(merged, mat);

      mesh.rotation.z = rotZ;

      return mesh;
    };

    const meshes: THREE.Object3D[] = [];

    const uRightBottom = createUShape(1.2, -1.2, Math.PI / 9);
    scene.add(uRightBottom);
    meshes.push(uRightBottom);

    const uLeftBottom = createUShape(-1.6, -0.8, -Math.PI / 4);
    scene.add(uLeftBottom);
    meshes.push(uLeftBottom);

    const uTopLeft = createUShape(-1.4, 0.8, Math.PI / 2.5);
    scene.add(uTopLeft);
    meshes.push(uTopLeft);

    // Capsule — local Y runs from -0.45 to +0.45
    const capsuleMat = createMaterial(-0.45, 0.45);
    const capsule = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.5, 12, 24), capsuleMat);
    capsule.position.set(1, 0.8, 0);
    capsule.rotation.z = Math.PI / 0.3;
    scene.add(capsule);
    meshes.push(capsule);

    // Sphere — local Y runs from -0.2 to +0.2
    const sphereMat = createMaterial(-0.2, 0.2);
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 32), sphereMat);
    sphere.position.set(0.05, 0.8, 0);
    scene.add(sphere);
    meshes.push(sphere);

    const basePositions = meshes.map((m) => m.position.clone());

    let frameId: number;

    const animate = (time: number) => {
      meshes.forEach((mesh, i) => {
        const base = basePositions[i];
        mesh.position.x = base.x + Math.cos(time * 0.0008 + i) * 0.03;
        mesh.position.y = base.y + Math.sin(time * 0.001 + i) * 0.03;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    const onResize = () => {
      const W2 = el.clientWidth;
      const H2 = el.clientHeight;
      const asp2 = W2 / H2;
      renderer.setSize(W2, H2);
      camera.left = -asp2;
      camera.right = asp2;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="home-header__background" ref={mountRef} />;
};

export default HomeHeaderBackground;
