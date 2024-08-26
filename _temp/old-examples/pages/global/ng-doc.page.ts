import { NgDocPage } from '@ng-doc/core';
import ExamplesCategory from '../../ng-doc.category';
import { CoolshapesComponent } from '@ngxpert/coolshapes';

const GlobalPage: NgDocPage = {
  title: `Global`,
  mdFile: './index.md',
  category: ExamplesCategory,
  order: 1,
  playgrounds: {
    CoolshapePlayground: {
      target: CoolshapesComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
};

export default GlobalPage;
