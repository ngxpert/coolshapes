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
  order: 3,
};

export default Api;
