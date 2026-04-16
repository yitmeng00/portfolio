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
      const { clientWidth: w, clientHeight: h } = element;
      syncCamera(renderer, camera, w, h);

      const nextVariant = getVariant(w);
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

    let tEased = 1;
    if (state.isTransitioning) {
      const raw = Math.min((time - state.transitionStart) / TRANSITION_MS, 1);
      tEased = easeInOut(raw);
      if (raw >= 1) state.isTransitioning = false;
    }

    state.meshStates.forEach((s, i) => {
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

    renderer.render(three.scene, camera);
  });

  return <div className="home-header__background" ref={mountRef} />;
};

export default HomeHeaderBackground;
