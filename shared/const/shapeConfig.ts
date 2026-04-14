import { ShapeConfig, ShapeVariant } from "../interface/Shape";

export const CONFIGS: Record<ShapeVariant, ShapeConfig> = {
  desktop: {
    uShapes: [
      [1.6, -0.9, Math.PI / 9],
      [-1.1, -1.1, -Math.PI / -2.5],
      [-1.7, 0.9, Math.PI / -2],
    ],
    capsule: { radius: 0.2, length: 0.5, position: [1, 0.8, 0], rotZ: Math.PI / 0.3 },
    sphere: { radius: 0.2, position: [0.05, 0.8, 0] },
  },
  tablet: {
    uShapes: [
      [0.8, -0.9, Math.PI / 9],
      [-0.5, -1, -Math.PI / -2],
      [-1.2, 0.3, Math.PI / -5],
    ],
    capsule: { radius: 0.12, length: 0.4, position: [0.4, 0.9, 0], rotZ: Math.PI / 0.3 },
    sphere: { radius: 0.12, position: [-0.35, 0.9, 0] },
  },
  mobile: {
    uShapes: [
      [0.45, -0.9, Math.PI / 9],
      [-0.25, -1, -Math.PI / -2],
      [-0.5, 0, Math.PI / -4],
    ],
    capsule: { radius: 0.08, length: 0.25, position: [0.1, 0.9, 0], rotZ: Math.PI / 0.3 },
    sphere: { radius: 0.08, position: [-0.35, 0.9, 0] },
  },
};
