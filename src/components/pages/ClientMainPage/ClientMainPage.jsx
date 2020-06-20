import React from 'react';
import styled from 'styled-components';

import MainClientBanner from 'molecules/MainClientBanner/MainClientBanner';
import BestIdeasBlock from 'organisms/BestIdeasBlock/BestIdeasBlock';
import IdeasSearchBlock from 'organisms/IdeasSearchBlock/IdeasSearchBlock';

const SContainer = styled.div`
  background-color: #f7f9fb;
  padding-bottom: 150px;
`;

const ClientMainPage = () => {
  return (
    <div>
      <MainClientBanner />
      <SContainer>
        <BestIdeasBlock />
        <IdeasSearchBlock />
      </SContainer>
    </div>
  );
};

export default ClientMainPage;
