import React from 'react';
import { COLORS, Text } from '@holism/core';
import { FavoriteIcon } from '@holism/icons';
import styled from 'styled-components';

const SContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  cursor: pointer;
`;

const SText = styled(Text)`
  margin-left: 4px;
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 700;
`;

const LikeButton = ({ count = 500, isLiked = true }) => {
  return (
    <SContainer>
      <FavoriteIcon size={22} color={isLiked ? COLORS.azure : COLORS.greyMouse} />
      <SText color={isLiked ? COLORS.azure : COLORS.greyMouse}>{count}</SText>
    </SContainer>
  );
};

export default LikeButton;
