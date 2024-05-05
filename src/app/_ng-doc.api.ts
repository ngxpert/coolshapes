import { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
  title: 'API',
  scopes: [
    {
      name: '@ngxpert/coolshapes',
      route: 'coolshapes',
      include: 'projects/ngxpert/coolshapes/src/public-api.ts',
    },
  ],
  order: 2,
};

export default Api;
