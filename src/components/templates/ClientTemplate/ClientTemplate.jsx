import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';

import ClientHeader from 'molecules/ClientHeader/ClientHeader';
import { clientRoutes } from '@/routes/client';

const SContent = styled.div`
  margin-top: 32px;
`;

const ClientTemplate = () => {
  const routesNodes = clientRoutes.map(route => <Route {...route} />);

  return (
    <div>
      <ClientHeader />
      <SContent>
        <Switch>{routesNodes}</Switch>
      </SContent>
    </div>
  );
};

export default ClientTemplate;
