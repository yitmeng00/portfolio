"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from "@/shared/const/viewport";
import { MeshState } from "@/shared/interface/Scene";
import { ShapeVariant } from "@/shared/interface/Shape";
import { buildScene } from "@/shared/utils/sceneBuilder";

const TRANSITION_MS = 400;

// Determines which layout variant to use based on width
const getVariant = (width: number): ShapeVariant => {
  if (width < BREAKPOINT_MOBILE) return "mobile";
  if (width < BREAKPOINT_TABLET) return "tablet";
  return "desktop";
};

const HomeHeaderBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = mountRef.current;
    if (!element) return;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio); // Match device pixel density
    renderer.setClearColor(0x000000, 0); // Transparent background
    element.appendChild(renderer.domElement);

    /**
     * Camera setup (Orthographic)
     * - No perspective distortion, consistent UI-like visuals
     * - Easier to align shapes across screen sizes
     */
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 2;

    // Scene + lighting setup
    const scene = new THREE.Scene();
    // Directional light - creates soft shading on shapes
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(2, 2, 2);
    scene.add(dirLight);
    // Ambient light - prevents completely dark areas
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    let currentVariant = getVariant(element.clientWidth);
    let meshStates: MeshState[] = [];
    let disposers: Array<() => void> = [];
    let transitionStart = 0;
    let isTransitioning = false;

    // Sync camera + renderer with container size
    const syncCamera = (w: number, h: number) => {
      const asp = w / h;
      renderer.setSize(w, h);
      camera.left = -asp;
      camera.right = asp;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();
    };

    // Handles switching between layout variants (responsive)
    const switchVariant = (nextVariant: ShapeVariant, now: number) => {
      const prevPositions = meshStates.map((s) => s.mesh.position.clone());
      const prevScales = meshStates.map((s) => s.mesh.scale.clone());

      meshStates.forEach((s) => scene.remove(s.mesh));
      disposers.forEach((d) => d());

      const { meshStates: next, disposers: nextDisposers } = buildScene(scene, nextVariant);

      next.forEach((s, i) => {
        const fromPos = prevPositions[i] ?? prevPositions[0] ?? s.basePos.clone();
        const fromScale = prevScales[i] ?? prevScales[0] ?? new THREE.Vector3(1, 1, 1);

        s.startPos = fromPos.clone();
        s.startScale = fromScale.clone();
        s.targetPos = s.basePos.clone();
        s.targetScale = new THREE.Vector3(1, 1, 1);

        s.mesh.position.copy(fromPos);
        s.mesh.scale.copy(fromScale);
      });

      meshStates = next;
      disposers = nextDisposers;
      currentVariant = nextVariant;
      transitionStart = now;
      isTransitioning = true;
    };

    // Initial setup
    syncCamera(element.clientWidth, element.clientHeight);
    const initial = buildScene(scene, currentVariant);
    meshStates = initial.meshStates;
    disposers = initial.disposers;

    // Animation loop
    let frameId: number;
    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);

      let tEased = 1;
      if (isTransitioning) {
        const raw = Math.min((time - transitionStart) / TRANSITION_MS, 1);
        tEased = easeInOut(raw);
        if (raw >= 1) isTransitioning = false;
      }

      meshStates.forEach((s, i) => {
        const floatX = Math.cos(time * 0.0008 + i) * 0.03;
        const floatY = Math.sin(time * 0.001 + i) * 0.03;

        if (tEased < 1) {
          s.mesh.position.x = s.startPos.x + (s.targetPos.x + floatX - s.startPos.x) * tEased;
          s.mesh.position.y = s.startPos.y + (s.targetPos.y + floatY - s.startPos.y) * tEased;
          s.mesh.scale.lerpVectors(s.startScale, s.targetScale, tEased);
        } else {
          s.mesh.position.x = s.basePos.x + floatX;
          s.mesh.position.y = s.basePos.y + floatY;
          s.mesh.scale.set(1, 1, 1);
        }
      });

      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    // Resize handler to keep canvas full-size and switch variants
    const onResize = () => {
      const W = element.clientWidth;
      const H = element.clientHeight;
      syncCamera(W, H);

      const nextVariant = getVariant(W);
      if (nextVariant !== currentVariant) {
        switchVariant(nextVariant, performance.now());
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      disposers.forEach((d) => d());
      renderer.dispose();
      if (element.contains(renderer.domElement)) element.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="home-header__background" ref={mountRef} />;
};

export default HomeHeaderBackground;
