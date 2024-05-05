import {NgDocPage} from '@ng-doc/core';
import GettingStartedCategory from '../../ng-doc.category';
import { BannerComponent } from 'src/app/components/banner/banner.component';

const WhatIsCoolshapesPage: NgDocPage = {
	title: `What is Coolshapes`,
	mdFile: './index.md',
	category: GettingStartedCategory,
	order: 1,
	demos: { BannerComponent }
};

export default WhatIsCoolshapesPage;
