import { useEffect, useRef } from "react";

/**
 * Runs a `requestAnimationFrame` loop, calling `callback` on every frame.
 * The callback receives the current DOMHighResTimeStamp (same as rAF).
 * Always uses the latest callback without restarting the loop.
 */
export const useAnimationLoop = (callback: (time: number) => void) => {
  const callbackRef = useRef(callback);

  // Keep ref in sync with latest callback without restarting the loop
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let frameId: number;

    const loop = (time: number) => {
      frameId = requestAnimationFrame(loop);
      callbackRef.current(time);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []); // Empty deps — loop starts once, callback updates via ref
};
