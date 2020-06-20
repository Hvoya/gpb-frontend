import React from 'react';
import styled from 'styled-components';

import MainClientBanner from 'molecules/MainClientBanner/MainClientBanner';
import BestIdiasBlock from 'organisms/BestIdiasBlock/BestIdiasBlock';
import IdiasSearchBlock from 'organisms/IdiasSearchBlock/IdiasSearchBlock';

const SContainer = styled.div`
  background-color: #f7f9fb;
  padding-bottom: 150px;
`;

const ClientMainPage = () => {
  return (
    <div>
      <MainClientBanner />
      <SContainer>
        <BestIdiasBlock />
        <IdiasSearchBlock />
      </SContainer>
    </div>
  );
};

export default ClientMainPage;
