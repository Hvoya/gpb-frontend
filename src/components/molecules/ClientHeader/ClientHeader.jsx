import React from 'react';
import { COLORS } from '@holism/core';
import styled from 'styled-components';

import { layoutConstants } from '@/enums/layout';
import LogoBlock from 'atoms/LogoBlock/LogoBlock';
import ClientAvatarBlock from 'molecules/ClientAvatarBlock/ClientAvatarBlock';

const SWrapper = styled.div`
  height: ${layoutConstants.headerHeight}px;
  background-color: ${COLORS.azure};
`;
const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
`;

const ClientHeader = () => {
  return (
    <SWrapper>
      <SContainer>
        <LogoBlock />
        <ClientAvatarBlock />
      </SContainer>
    </SWrapper>
  );
};

export default ClientHeader;
