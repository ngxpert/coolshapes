import { Component, input } from '@angular/core';
import { CoolshapesComponent } from '../coolshape.component';

@Component({
    template: '',
    standalone: false
})
class BaseCategoryShapeComponent {
  /**
   * The index of shape within the shape category, it would randomly select a shape from the category if type inputs given. index starts from 0.
   */
  index = input<number>(0);

  /**
   * If set true it will select a random shape
   */
  random = input<boolean>();

  /**
   * Whether to add noise to the shape or not.
   * Defaults to true
   */
  noise = input<boolean>(true);

  /**
   * The dimension of shape
   * Defaults to 200
   */
  size = input<number>(200);
}

@Component({
    selector: 'number',
    template: `
    <coolshape
      type="number"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class NumberShapeComponent extends BaseCategoryShapeComponent {}

@Component({
    selector: 'star',
    template: `
    <coolshape
      type="star"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class StarShapeComponent extends BaseCategoryShapeComponent {}

@Component({
    selector: 'flower',
    template: `
    <coolshape
      type="flower"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class FlowerShapeComponent extends BaseCategoryShapeComponent {}

@Component({
    selector: 'ellipse',
    template: `
    <coolshape
      type="ellipse"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class EllipseShapeComponent extends BaseCategoryShapeComponent {}

@Component({
    selector: 'wheel',
    template: `
    <coolshape
      type="wheel"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class WheelShapeComponent extends BaseCategoryShapeComponent {}
@Component({
    selector: 'moon',
    template: `
    <coolshape
      type="moon"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class MoonShapeComponent extends BaseCategoryShapeComponent {}
@Component({
    selector: 'misc',
    template: `
    <coolshape
      type="misc"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class MiscShapeComponent extends BaseCategoryShapeComponent {}
@Component({
    selector: 'triangle',
    template: `
    <coolshape
      type="triangle"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class TriangleShapeComponent extends BaseCategoryShapeComponent {}

@Component({
    selector: 'polygon',
    template: `
    <coolshape
      type="polygon"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class PolygonShapeComponent extends BaseCategoryShapeComponent {}

@Component({
    selector: 'rectangle',
    template: `
    <coolshape
      type="rectangle"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
    imports: [CoolshapesComponent]
})
export class RectangleShapeComponent extends BaseCategoryShapeComponent {}
