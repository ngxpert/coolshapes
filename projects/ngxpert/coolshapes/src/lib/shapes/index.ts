import { e_1 } from './ellipses';

export const shapes: Record<
  string,
  { shapeName: string; svgInnerContent: string }[]
> = {
  // star: [],
  // flower: [],
  ellipse: [e_1],
  // wheel: [],
  // moon: [],
  // misc: [],
  // triangle: [],
  // polygon: [],
  // rectangle: [],
  // number: [],
};

export type shapeTypes = keyof typeof shapes;
