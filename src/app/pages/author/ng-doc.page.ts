import {NgDocPage} from '@ng-doc/core';
import { AuthorComponent } from 'src/app/components/author/author';

const AuthorPage: NgDocPage = {
	title: `Author`,
	mdFile: './index.md',
	order: 5,
	demos: {AuthorComponent}
};

export default AuthorPage;
