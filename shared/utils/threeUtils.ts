import * as THREE from "three";

import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from "@/shared/const/viewport";
import { ShapeVariant } from "@/shared/interface/Shape";

// Determines which layout variant to use based on container width
export const getVariant = (width: number): ShapeVariant => {
  if (width < BREAKPOINT_MOBILE) return "mobile";
  if (width < BREAKPOINT_TABLET) return "tablet";
  return "desktop";
};

// Quadratic ease-in-out: smooth acceleration and deceleration
export const easeInOut = (t: number): number => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

//Syncs orthographic camera frustum and renderer size to container dimensions
export const syncCamera = (
  renderer: THREE.WebGLRenderer,
  camera: THREE.OrthographicCamera,
  width: number,
  height: number,
): void => {
  const asp = width / height;
  renderer.setSize(width, height);
  camera.left = -asp;
  camera.right = asp;
  camera.top = 1;
  camera.bottom = -1;
  camera.updateProjectionMatrix();
};
