import { useEffect, useRef } from "react";
import * as THREE from "three";

export interface ThreeSceneRefs {
  renderer: THREE.WebGLRenderer;
  camera: THREE.OrthographicCamera;
  scene: THREE.Scene;
}

/**
 * Initialises a Three.js renderer, orthographic camera, and lit scene
 * mounted inside `containerRef`. Returns refs to each for downstream use.
 * Handles renderer teardown on unmount automatically.
 */
export const useThreeScene = (
  containerRef: React.RefObject<HTMLDivElement | null>,
): React.RefObject<ThreeSceneRefs | null> => {
  const threeRef = useRef<ThreeSceneRefs | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    element.appendChild(renderer.domElement);

    // Orthographic camera: no perspective distortion — consistent UI-like visuals
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 2;

    const scene = new THREE.Scene();
    // Directional light — soft shading on shapes
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(2, 2, 2);
    scene.add(dirLight);
    // Ambient light — prevents completely dark areas
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    threeRef.current = { renderer, camera, scene };

    return () => {
      renderer.dispose();
      if (element.contains(renderer.domElement)) {
        element.removeChild(renderer.domElement);
      }
      threeRef.current = null;
    };
  }, [containerRef]);

  return threeRef;
};
