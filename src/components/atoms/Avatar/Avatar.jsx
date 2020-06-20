import React from 'react';
import styled from 'styled-components';

import Star from '@/assets/images/star.png';

const SContainer = styled.div`
  position: relative;
`;

const SStar = styled.img`
  position: absolute;
  right: -2px;
  bottom: -5px;
`;

const SAvatar = styled.img`
  display: block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const Avatar = ({ size = 40, src }) => {
  return (
    <SContainer>
      <SAvatar size={size} src={src} />
      <SStar src={Star} />
    </SContainer>
  );
};

export default Avatar;
