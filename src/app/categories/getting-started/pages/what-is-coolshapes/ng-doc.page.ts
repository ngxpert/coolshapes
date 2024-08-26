import {NgDocPage} from '@ng-doc/core';
import GettingStartedCategory from '../../ng-doc.category';
import { BannerComponent } from '../../../../components/banner/banner.component';

const WhatIsCoolshapesPage: NgDocPage = {
	title: `What is Coolshapes`,
	mdFile: './index.md',
	category: GettingStartedCategory,
	demos: { BannerComponent },
	order: 1
};

export default WhatIsCoolshapesPage;
