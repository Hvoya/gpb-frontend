import React, { useEffect, useState } from 'react';
import { H2 } from '@holism/core';
import styled from 'styled-components';

import SearchField from 'molecules/SearchField/SearchField';
import IdeasFilters from 'molecules/IdeasFilters/IdeasFilters';
import CenterContentHoc from '@/components/HOC/CenterContentHOC';
import IdeaCard from 'molecules/IdeaCard/IdeaCard';
import axios from 'axios';

const SContainer = styled.div``;

const SSearchContainer = styled.div`
  & > div {
    padding: 16px;
  }
`;

const IdeasSearchBlock = () => {
  const [ideas, setIdeas] = useState([]);
  const [search, setSearch] = useState();
  const [theme, setTheme] = useState({});

  useEffect(() => {
    axios
      .get('/ideas/ideas/', {
        params: {
          limit: 10,
          search,
          themes: theme && theme.id,
        },
      })
      .then(r => setIdeas(r.data.results));
  }, [search, theme]);

  return (
    <SContainer>
      <CenterContentHoc>
        <div>
          <H2 style={{ marginBottom: 21 }}>Поиск</H2>
        </div>
        <SearchField onChange={setSearch} />
        <IdeasFilters onChange={setTheme} />
        <SSearchContainer>
          {ideas.map(idea => (
            <IdeaCard type="row" idea={idea} />
          ))}
        </SSearchContainer>
      </CenterContentHoc>
    </SContainer>
  );
};

export default IdeasSearchBlock;
