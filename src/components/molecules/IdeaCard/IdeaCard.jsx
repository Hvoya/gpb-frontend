import React from 'react';
import styled from 'styled-components';
import { COLORS, Text, Paragraph } from '@holism/core';

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

const SH = styled(Paragraph)`
  min-height: 40px;
  font-size: 16px;
  font-weight: 700;
`;

const STopic = styled(Text)`
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

const IdeaCard = ({ type, idea = {} }) => {
  return (
    <Paper height={type ? '170px' : '292px'}>
      <SContainer>
        <STop type={type}>
          <STopic>{idea.themes_info?.name}</STopic>
          <SHead>
            <SH>{idea.theme}</SH>
            <SSmall>Влад Елисеев 27.05.2020</SSmall>
          </SHead>
        </STop>
        <Text size={14}>{idea.description}</Text>
        <LikeButton count={idea.like_count} isLiked={false} />
      </SContainer>
    </Paper>
  );
};

export default IdeaCard;
