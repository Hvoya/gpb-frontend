import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@holism/core';
import { SearchIcon } from '@holism/icons';

const SContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const SInput = styled.input`
  width: 100%;
  border-radius: 10px;
  height: 64px;
  padding: 0 70px 0 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border: none;
  transition: all 0.3s;
  &:active,
  &:focus {
    border: none;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

const SIcon = styled(SearchIcon)`
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  height: 24px;
  fill: ${COLORS.azure};
  cursor: pointer;
`;

const SearchField = ({ onChange }) => {
  const [v, setV] = useState();
  const handleChange = () => {
    onChange(v);
  };
  return (
    <SContainer>
      <SInput value={v} onChange={e => setV(e.target.value)} icon={SearchIcon} />
      <SIcon onClick={handleChange} />
    </SContainer>
  );
};

export default SearchField;
