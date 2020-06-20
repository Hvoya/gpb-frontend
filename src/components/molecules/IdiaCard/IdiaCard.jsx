import React from 'react';
import styled from 'styled-components';
import { Paragraph, H3, COLORS, Text } from '@holism/core';

import Paper from 'atoms/Paper/Paper';
import { layoutConstants } from '@/enums/layout';
import LikeButton from 'atoms/LikeButton/LikeButton';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const STop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props => (props.type ? 'row-reverse' : 'column')};
  justify-content: space-between;
`;

const STopic = styled(Paragraph)`
  font-weight: 700;
  margin-bottom: 16px;
  color: ${COLORS.azure};
`;

const SHead = styled.div`
  margin-bottom: 16px;
`;

const SSmall = styled(Text)`
  font-size: 12px;
  color: ${layoutConstants.fontColorTertiary};
`;

const IdiaCard = ({ type }) => {
  return (
    <Paper height={type ? '170px' : '292px'}>
      <SContainer>
        <STop type={type}>
          <STopic>Еда</STopic>
          <SHead>
            <H3>Организовать доставку пиццы в обед</H3>
            <SSmall>Влад Елисеев 27.05.2020</SSmall>
          </SHead>
        </STop>
        <Text size={14}>
          Обедать хочется, уходить из офиса – нет. Посему предлагаю начать скидываться каждый рабочий день на доставку
          пиццы
        </Text>
        <LikeButton />
      </SContainer>
    </Paper>
  );
};

export default IdiaCard;
