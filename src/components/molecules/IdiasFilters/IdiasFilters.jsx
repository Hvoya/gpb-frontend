import React from 'react';
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

const optionsData = [
  { label: 'Москва', value: 'Moscow' },
  { label: 'Париж', value: 'Paris' },
  { label: 'Прага', value: 'Prague' },
  { label: 'Амстердам', value: 'Amsterdam' },
  { label: 'Берлин', value: 'Berlin' },
  { label: 'Лондон', value: 'London' },
  { label: 'Рига', value: 'Riga' },
];

const itemsData = [
  { id: 'firstItem', label: 'Москва' },
  { id: 'secondItem', label: 'Петербург' },
  { id: 'thirdItem', label: 'Новгород' },
  { id: 'fourthItem', label: 'Самара' },
  { id: 'fifthItem', label: 'Темников' },
];

const IdiasFilters = () => {
  return (
    <div>
      <SRow>
        <Text>Тема</Text>
        <Select placeholder=" Выберете тему" dimension="xsmall" options={optionsData} />
      </SRow>
      <SRow>
        <Text>Теги</Text>
        <Chips items={itemsData} onRemoveItem={() => []} />
      </SRow>
    </div>
  );
};

export default IdiasFilters;
