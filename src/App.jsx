import React from 'react';

import MainHOC from '@/components/HOC/MainHOC';
import Router from '@/routes/Router';

const App = () => {
  return (
    <MainHOC>
      <Router />
    </MainHOC>
  );
};

export default App;
