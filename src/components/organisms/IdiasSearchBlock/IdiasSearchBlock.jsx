import React from 'react';
import { H2 } from '@holism/core';
import styled from 'styled-components';

import SearchField from 'molecules/SearchField/SearchField';
import IdiasFilters from 'molecules/IdiasFilters/IdiasFilters';
import CenterContentHoc from '@/components/HOC/CenterContentHOC';
import IdiaCard from 'molecules/IdiaCard/IdiaCard';

const SContainer = styled.div`
 
`;

const SSearchContainer = styled.div`
  & > div {
    padding: 16px;
  }
`;

const IdiasSearchBlock = () => {
  return (
    <SContainer>
      <CenterContentHoc>
        <div>
          <H2 style={{ marginBottom: 21 }}>Поиск</H2>
        </div>
        <SearchField />
        <IdiasFilters />
        <SSearchContainer>
          {Array(5).fill(null).map(() => <IdiaCard type="row" />)}
        </SSearchContainer>
      </CenterContentHoc>
    </SContainer>
  );
};

export default IdiasSearchBlock;
