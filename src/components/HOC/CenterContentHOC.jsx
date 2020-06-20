import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  max-width: ${props => props.size}px;
  margin: ${props => props.horizontalMargin}px auto;
`;

const CenterContentHoc = ({ size = 1024, horizontalMargin = 15, children }) => {
  return (
    <SContainer size={size} horizontalMargin={horizontalMargin}>
      {children}
    </SContainer>
  );
};

export default CenterContentHoc;
