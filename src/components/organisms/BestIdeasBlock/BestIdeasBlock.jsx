import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { H2, Tabs } from '@holism/core';
import styled from 'styled-components';

import IdeaCard from 'molecules/IdeaCard/IdeaCard';
import CenterContentHoc from '@/components/HOC/CenterContentHOC';

const SCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
  & > div {
    width: calc(100% / 4 - 8px);
    padding: 16px;
  }
`;

const BestIdeasBlock = () => {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    axios
      .get('/ideas/ideas/', {
        params: {
          ordering: 'created',
          limit: 4,
        },
      })
      .then(r => setIdeas(r.data.results));
  }, []);
  const [tabList, setTabList] = useState([
    {
      id: 'new',
      label: 'Новые',
      isActive: true,
    },
    {
      id: 'popular',
      label: 'Популярные',
      isActive: false,
    },
  ]);

  const handleTabChange = ({ id, isActive, label }) => {
    setTabList(tabList.map(item => (item.id === id ? { id, isActive: true, label } : { ...item, isActive: false })));
  };

  return (
    <CenterContentHoc>
      <H2 style={{ marginBottom: 21, paddingTop: 62 }}>Лучшие идеи</H2>
      <Tabs list={tabList} onChange={handleTabChange} />
      <SCardContainer>
        {ideas.map(idea => (
          <IdeaCard idea={idea} />
        ))}
      </SCardContainer>
    </CenterContentHoc>
  );
};

export default BestIdeasBlock;
