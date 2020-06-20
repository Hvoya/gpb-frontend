import React from 'react';
import styled from 'styled-components';

const SAvatar = styled.img`
  display: block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const Avatar = ({ size = 40, src }) => {
  return <SAvatar size={size} src={src} />;
};

export default Avatar;
