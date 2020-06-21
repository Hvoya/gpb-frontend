import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { COLORS, Text, Paragraph } from '@holism/core';
import { layoutConstants } from '@/enums/layout';
import Paper from 'atoms/Paper/Paper';
import LikeButton from 'atoms/LikeButton/LikeButton';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const STop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props => (props.type ? 'row-reverse' : 'column')};
  justify-content: space-between;
`;

const SH = styled(Paragraph)`
  font-size: 16px;
  font-weight: 700;
`;

const STopic = styled(Text)`
  font-weight: 700;
  margin-bottom: 16px;
  color: ${COLORS.azure};
`;

const SHead = styled.div`
  margin-bottom: 16px;
`;

const SSmall = styled(Text)`
  font-size: 12px;
  color: ${layoutConstants.fontColorTertiary};
`;

const SDescription = styled(Text)`
  margin-bottom: 16px;
`;


const SolutionCard = ({solution}) => {
  const [ideaData, setIdeaData] = useState(null);

  useEffect(() => {
    if (!solution.idea) {
      return;
    }

    axios
      .get(`/ideas/ideas/${solution.idea}/`)
      .then(r => {
        setIdeaData(r.data)
      });
  }, [solution]);

  console.log(solution, ideaData);

  return (
    <Paper>
      <SContainer>
        {solution.idea && ideaData ? (
          <>
            <STop>
              <STopic>{solution.idea ? ideaData.themes_info.name : 'Тема'}</STopic>
              <SHead>
                <SH>{solution.idea ? ideaData.theme : 'Бизнес-решение'}</SH>
                <SSmall>Влад Елисеев 27.05.2020</SSmall>
              </SHead>
            </STop>
            <SDescription size={14}>{solution.short_description}</SDescription>
            <LikeButton count={solution.idea ? ideaData.like_count : solution.like_count} isLiked={false} />
          </>
        ) : (
          <></>
        )}
      </SContainer>
    </Paper>
  );
};

export default SolutionCard;
