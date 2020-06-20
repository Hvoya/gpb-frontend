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
  p:first-child {
    font-weight: 600;
  }
  img {
    margin-left: 8px;
  }
`;

const SGrade = styled(Paragraph)`
  color: white;
  font-weight: 200;
  font-size: 12px;
`;

const ClientAvatarBlock = () => {
  return (
    <SContainer>
      <div>
        <Paragraph size={14} color={layoutConstants.fontColorSecondary}>
          Глеб Левинков
        </Paragraph>
        <SGrade>Рационализатор</SGrade>
      </div>
      <Avatar src={hleb} />
    </SContainer>
  );
};

export default ClientAvatarBlock;
