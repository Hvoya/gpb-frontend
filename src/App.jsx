import React from 'react';

import MainHoc from '@/components/HOC/MainHOC';
import Router from '@/routes/Router';

const App = () => {
  return (
    <MainHoc>
      <Router />
    </MainHoc>
  );
};

export default App;
