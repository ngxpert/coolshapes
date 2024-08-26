import { NgDocPage } from '@ng-doc/core';
import ExamplesCategory from '../../ng-doc.category';
import {
  EllipseShapeComponent,
  FlowerShapeComponent,
  MiscShapeComponent,
  MoonShapeComponent,
  NumberShapeComponent,
  PolygonShapeComponent,
  RectangleShapeComponent,
  TriangleShapeComponent,
  WheelShapeComponent,
} from '../../../../../../projects/ngxpert/coolshapes/src/public-api';

const CategoryPage: NgDocPage = {
  title: `Category`,
  mdFile: './index.md',
  category: ExamplesCategory,
  order: 2,
  playgrounds: {
    NumberShapePlayground: {
      target: NumberShapeComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
    FlowerShapePlayground: {
      target: FlowerShapeComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
    EllipseShapePlayground: {
      target: EllipseShapeComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
    WheelShapePlayground: {
      target: WheelShapeComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
    MoonShapePlayground: {
      target: MoonShapeComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
    MiscShapePlayground: {
      target: MiscShapeComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
    TriangleShapePlayground: {
      target: TriangleShapeComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
    PolygonShapePlayground: {
      target: PolygonShapeComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
    RectangleShapePlayground: {
      target: RectangleShapeComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
};

export default CategoryPage;
