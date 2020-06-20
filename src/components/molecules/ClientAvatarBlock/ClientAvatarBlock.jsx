import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '@holism/core';

import Avatar from 'atoms/Avatar/Avatar';
import hleb from '@/assets/images/hleb.png';
import { layoutConstants } from '@/enums/layout';

const SContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  p {
    font-weight: 600;
  }
  img {
    margin-left: 8px;
  }
`;

const ClientAvatarBlock = () => {
  return (
    <SContainer>
      <Paragraph size={14} color={layoutConstants.fontColorSecondary}>
        Глеб Левинков
      </Paragraph>
      <Avatar src={hleb} />
    </SContainer>
  );
};

export default ClientAvatarBlock;
