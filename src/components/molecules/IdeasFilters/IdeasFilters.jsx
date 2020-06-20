import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Select, Chips, Text } from '@holism/core';

const SRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  & > *:first-child {
    font-size: 18px;
    font-weight: 700;
    margin-right: 40px;
  }
  & > *:last-child {
    flex-grow: 1;
  }
`;

const itemsData = [
  { id: 'firstItem', label: 'Москва' },
  { id: 'secondItem', label: 'Петербург' },
  { id: 'thirdItem', label: 'Новгород' },
  { id: 'fourthItem', label: 'Самара' },
  { id: 'fifthItem', label: 'Темников' },
];

const IdeasFilters = ({ onChange }) => {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    axios.get('/ideas/themes/').then(r => setThemes(r.data.results.map(t => ({ id: t.id, label: t.name }))));
  }, []);

  return (
    <div>
      <SRow>
        <Text>Тема</Text>
        <Select onChange={v => onChange(v)} placeholder=" Выберете тему" dimension="small" options={themes} />
      </SRow>
      <SRow>
        <Text>Теги</Text>
        <Chips items={itemsData} onRemoveItem={() => []} />
      </SRow>
    </div>
  );
};

export default IdeasFilters;
