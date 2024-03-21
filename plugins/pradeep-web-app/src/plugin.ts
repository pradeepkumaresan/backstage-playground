import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pradeepWebAppPlugin = createPlugin({
  id: 'pradeep-web-app',
  routes: {
    root: rootRouteRef,
  },
});

export const PradeepWebAppPage = pradeepWebAppPlugin.provide(
  createRoutableExtension({
    name: 'PradeepWebAppPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
