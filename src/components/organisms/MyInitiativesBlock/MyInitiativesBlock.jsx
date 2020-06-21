import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button, H2, Text, Grid, GridCol } from '@holism/core';
import IdeaCard from 'molecules/IdeaCard/IdeaCard';
import SolutionCard from 'molecules/SolutionCard/SolutionCard';

const SIdeaCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
  & > div {
    width: calc(100% / 4 - 8px);
    padding: 16px;
  }
`;
const SSolutionCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  & > div {
    width: calc(100% / 2 - 8px);
    padding: 16px;
  }
`;

const MyInitiativesBlock = ({ ideas = [], solutions = [] }) => {

  return (
    <>
      <H2>Мои идеи</H2>
      <SIdeaCardsContainer>
        {ideas.map(idea => (
          <IdeaCard idea={idea} />
        ))}
      </SIdeaCardsContainer>
      <H2>Мои бизнес-решения</H2>
      <SSolutionCardsContainer>
        {solutions.map(solution => (
          <SolutionCard solution={solution} />
        ))}
      </SSolutionCardsContainer>
      {/* <Grid responsive="MD">
        <GridCol column={40}>
          <Paper>
            <div style={{ padding: 32 }}>
            </div>
          </Paper>
        </GridCol>
        <GridCol column={60}>
          <Paper>
            <div style={{ padding: 32 }}>
            </div>
          </Paper>
        </GridCol>
      </Grid> */}
    </>
  );
};

export default MyInitiativesBlock;