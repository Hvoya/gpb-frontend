import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  background-color: white;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
  height: ${props => props.height};
  margin-bottom: 24px;
`;

const Paper = ({ children, height }) => {
  return (
    <SContainer height={height}>
      {children}
    </SContainer>
  );
};

export default Paper;