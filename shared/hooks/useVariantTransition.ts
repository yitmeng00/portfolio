import { useRef } from "react";
import * as THREE from "three";

import { MeshState } from "@/shared/interface/Scene";
import { ShapeVariant } from "@/shared/interface/Shape";
import { buildScene } from "@/shared/utils/sceneBuilder";

export interface TransitionState {
  meshStates: MeshState[];
  disposers: Array<() => void>;
  currentVariant: ShapeVariant;
  transitionStart: number;
  isTransitioning: boolean;
}

/**
 * Manages scene mesh states and smooth transitions between responsive
 * layout variants (mobile / tablet / desktop).
 */
export const useVariantTransition = () => {
  const stateRef = useRef<TransitionState>({
    meshStates: [],
    disposers: [],
    currentVariant: "desktop",
    transitionStart: 0,
    isTransitioning: false,
  });

  const init = (scene: THREE.Scene, variant: ShapeVariant) => {
    const { meshStates, disposers } = buildScene(scene, variant);
    stateRef.current = {
      meshStates,
      disposers,
      currentVariant: variant,
      transitionStart: 0,
      isTransitioning: false,
    };
  };

  const switchVariant = (scene: THREE.Scene, nextVariant: ShapeVariant, now: number) => {
    const { meshStates, disposers } = stateRef.current;

    // Snapshot current positions/scales as transition start points
    const prevPositions = meshStates.map((s) => s.mesh.position.clone());
    const prevScales = meshStates.map((s) => s.mesh.scale.clone());

    meshStates.forEach((s) => scene.remove(s.mesh));
    disposers.forEach((d) => d());

    const { meshStates: next, disposers: nextDisposers } = buildScene(scene, nextVariant);

    next.forEach((s, i) => {
      s.startPos = (prevPositions[i] ?? prevPositions[0] ?? s.basePos).clone();
      s.startScale = (prevScales[i] ?? prevScales[0] ?? new THREE.Vector3(1, 1, 1)).clone();
      s.targetPos = s.basePos.clone();
      s.targetScale = new THREE.Vector3(1, 1, 1);

      s.mesh.position.copy(s.startPos);
      s.mesh.scale.copy(s.startScale);
    });

    stateRef.current = {
      meshStates: next,
      disposers: nextDisposers,
      currentVariant: nextVariant,
      transitionStart: now,
      isTransitioning: true,
    };
  };

  const dispose = () => {
    stateRef.current.disposers.forEach((d) => d());
  };

  return { stateRef, init, switchVariant, dispose };
};
