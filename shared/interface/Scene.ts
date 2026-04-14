import * as THREE from "three";

export type MeshState = {
  mesh: THREE.Object3D;
  basePos: THREE.Vector3;
  targetPos: THREE.Vector3;
  startPos: THREE.Vector3;
  targetScale: THREE.Vector3;
  startScale: THREE.Vector3;
};
