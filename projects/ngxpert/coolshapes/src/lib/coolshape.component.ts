import {
  Component,
  ElementRef,
  Renderer2,
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

  /**
   * The category of shapes, if left empty it will randomly select a category.
   */
  type = input<ShapeTypes>();

  /**
   * The index of shape within the shape category, it would randomly select a shape from the category if type inputs given. index starts from 0.
   */
  index = input<number>();

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
