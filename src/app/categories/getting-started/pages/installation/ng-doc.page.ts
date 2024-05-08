import {NgDocPage} from '@ng-doc/core';
import GettingStartedCategory from '../../ng-doc.category';
import { UsageComponent } from 'src/app/components/usage/usage.component';

const InstallationPage: NgDocPage = {
	title: `Installation`,
	mdFile: './index.md',
	category: GettingStartedCategory,
	order: 2,
	demos: {UsageComponent},
};

export default InstallationPage;
