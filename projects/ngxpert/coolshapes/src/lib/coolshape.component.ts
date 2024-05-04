import {
  Component,
  ElementRef,
  Renderer2,
  Type,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { shapeTypes } from './shapes';
import { shapes } from './shapes';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { noise } from './noise';

@Component({
  selector: 'coolshape',
  standalone: true,
  templateUrl: './coolshape.component.html',
  styles: ``,
  host: {
    role: 'img',
  },
  imports: [NgClass],
})
export class CoolshapesComponent {
  readonly defaultWidth = 200;
  readonly defaultHeight = 200;
  readonly shapeKeys = Object.keys(shapes);

  type = input<shapeTypes>();
  index = input<number>();
  random = input<boolean>();
  noise = input<boolean>(true);
  size = input<number>();
  svg = viewChild<ElementRef<SVGElement>>('svg');
  shapeName = signal<string>('');

  private _renderer = inject(Renderer2);

  shapeType = computed(() => {
    return (
      this.type() ||
      this.shapeKeys[Math.floor(Math.random() * this.shapeKeys.length)]
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

      const svgInnerContent = this.noise()
        ? shape.svgInnerContent +
          noise.replaceAll('{shapeName}', shape.shapeName)
        : shape.svgInnerContent;

      this._renderer.setProperty(
        this.svg()?.nativeElement,
        'innerHTML',
        svgInnerContent,
      );
    });
  }
}
