import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '@/store';
import GuardHoc from '@/components/HOC/GuardHOC';

const MainHOC = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <GuardHoc>{children}</GuardHoc>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default MainHOC;
