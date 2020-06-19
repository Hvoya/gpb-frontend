import React from 'react';
import { Route, Switch } from 'react-router';

import { mainRoutes } from '@/routes/main';

const Router = () => {
  const routesNodes = mainRoutes.map(route => <Route {...route} />);
  return <Switch>{routesNodes}</Switch>;
};

export default React.memo(Router);
