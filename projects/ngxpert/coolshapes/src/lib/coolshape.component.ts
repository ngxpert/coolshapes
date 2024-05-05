import {
  Component,
  ElementRef,
  Renderer2,
  Signal,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { shapes } from './shapes';
import { NgClass } from '@angular/common';
import { noise } from './noise';
import { ShapeTypes } from './types';

@Component({
  selector: 'coolshape',
  standalone: true,
  templateUrl: './coolshape.component.html',
  host: {
    role: 'img',
  },
  imports: [NgClass],
})
export class CoolshapesComponent {
  readonly defaultWidth = 200;
  readonly defaultHeight = 200;
  readonly shapeKeys = Object.keys(shapes);

  type = input<ShapeTypes>();
  index = input<number>();
  random = input<boolean>();
  noise = input<boolean>(true);
  size = input<number>();

  svg = viewChild<ElementRef<SVGElement>>('svg');
  shapeName = signal<string>('');

  private _renderer = inject(Renderer2);

  shapeType = computed<ShapeTypes>(() => {
    return (
      this.type() ||
      (this.shapeKeys[
        Math.floor(Math.random() * this.shapeKeys.length)
      ] as ShapeTypes)
    );
  });

  shapeIndex = computed(() => {
    const randomIndex = Math.floor(
      Math.random() * shapes[this.shapeType()].length,
    );

    const originalIndex = this.index();
    return originalIndex !== undefined && !this.random()
      ? originalIndex
      : randomIndex;
  });

  constructor() {
    effect(() => {
      // only effects on shapeType, shapeIndex, and noise should be allowed in here

      const shape = shapes[this.shapeType()][this.shapeIndex()];
      const shapeName = shape.name.startsWith('cs-')
        ? shape.name.slice(3)
        : shape.name;

      const svgInnerContent = this.noise()
        ? shape.data + noise.replaceAll('{shapeName}', shapeName)
        : shape.data;

      this._renderer.setProperty(
        this.svg()?.nativeElement,
        'innerHTML',
        svgInnerContent,
      );
    });
  }
}

@Component({
  selector: 'ellipse',
  template: `
    <coolshape
      [type]="shapeType()"
      [index]="index()"
      [random]="random()"
      [noise]="noise()"
      [size]="size()"
    ></coolshape>
  `,
  standalone: true,
  imports: [CoolshapesComponent],
})
export class EllipseShapeComponent extends CoolshapesComponent {
  override shapeType: Signal<ShapeTypes> = computed<ShapeTypes>(() => {
    return 'ellipse';
  });
}
