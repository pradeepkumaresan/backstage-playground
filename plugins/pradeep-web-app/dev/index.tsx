import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pradeepWebAppPlugin, PradeepWebAppPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pradeepWebAppPlugin)
  .addPage({
    element: <PradeepWebAppPage />,
    title: 'Root Page',
    path: '/pradeep-web-app'
  })
  .render();
