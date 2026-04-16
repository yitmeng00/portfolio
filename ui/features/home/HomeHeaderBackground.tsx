"use client";

import { useEffect, useRef } from "react";

import { useAnimationLoop } from "@/shared/hooks/useAnimationLoop";
import { useThreeScene } from "@/shared/hooks/useThreeScene";
import { useVariantTransition } from "@/shared/hooks/useVariantTransition";
import { getVariant, syncCamera, easeInOut } from "@/shared/utils/threeUtils";

const TRANSITION_MS = 400;

const HomeHeaderBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const threeRef = useThreeScene(mountRef);
  const { stateRef, init, switchVariant, dispose } = useVariantTransition();

  // Scene initialisation + resize handling
  useEffect(() => {
    const element = mountRef.current;
    const three = threeRef.current;
    if (!element || !three) return;

    const { renderer, camera, scene } = three;
    const initialVariant = getVariant(element.clientWidth);

    syncCamera(renderer, camera, element.clientWidth, element.clientHeight);
    init(scene, initialVariant);

    const onResize = () => {
      const { clientWidth: width, clientHeight: height } = element;
      syncCamera(renderer, camera, width, height);

      const nextVariant = getVariant(width);
      if (nextVariant !== stateRef.current.currentVariant) {
        switchVariant(scene, nextVariant, performance.now());
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      dispose();
    };
  }, [threeRef, stateRef, init, switchVariant, dispose]);

  // Render loop: floating animation + variant transitions
  useAnimationLoop((time) => {
    const three = threeRef.current;
    if (!three) return;

    const { renderer, camera } = three;
    const state = stateRef.current;

    let easedProgress = 1;
    if (state.isTransitioning) {
      const raw = Math.min((time - state.transitionStart) / TRANSITION_MS, 1);
      easedProgress = easeInOut(raw);
      if (raw >= 1) state.isTransitioning = false;
    }

    state.meshStates.forEach((state, i) => {
      const floatX = Math.cos(time * 0.0008 + i) * 0.03;
      const floatY = Math.sin(time * 0.001 + i) * 0.03;

      if (easedProgress < 1) {
        state.mesh.position.x =
          state.startPos.x + (state.targetPos.x + floatX - state.startPos.x) * easedProgress;
        state.mesh.position.y =
          state.startPos.y + (state.targetPos.y + floatY - state.startPos.y) * easedProgress;
        state.mesh.scale.lerpVectors(state.startScale, state.targetScale, easedProgress);
      } else {
        state.mesh.position.x = state.basePos.x + floatX;
        state.mesh.position.y = state.basePos.y + floatY;
        state.mesh.scale.set(1, 1, 1);
      }
    });

    renderer.render(three.scene, camera);
  });

  return <div className="home-header__background" ref={mountRef} />;
};

export default HomeHeaderBackground;
