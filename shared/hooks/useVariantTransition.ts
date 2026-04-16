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
    const prevPositions = meshStates.map((state) => state.mesh.position.clone());
    const prevScales = meshStates.map((state) => state.mesh.scale.clone());

    meshStates.forEach((state) => scene.remove(state.mesh));
    disposers.forEach((disposer) => disposer());

    const { meshStates: states, disposers: nextDisposers } = buildScene(scene, nextVariant);

    states.forEach((state, i) => {
      state.startPos = (prevPositions[i] ?? prevPositions[0] ?? state.basePos).clone();
      state.startScale = (prevScales[i] ?? prevScales[0] ?? new THREE.Vector3(1, 1, 1)).clone();
      state.targetPos = state.basePos.clone();
      state.targetScale = new THREE.Vector3(1, 1, 1);

      state.mesh.position.copy(state.startPos);
      state.mesh.scale.copy(state.startScale);
    });

    stateRef.current = {
      meshStates: states,
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
