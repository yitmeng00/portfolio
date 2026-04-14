export type ShapeVariant = "desktop" | "tablet" | "mobile";

export type ShapeConfig = {
  uShapes: [number, number, number][];
  capsule: { radius: number; length: number; position: [number, number, number]; rotZ: number };
  sphere: { radius: number; position: [number, number, number] };
};
