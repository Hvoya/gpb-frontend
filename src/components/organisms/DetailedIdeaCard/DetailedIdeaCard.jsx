import React from 'react';
import { Button, Text } from '@holism/core';
import { PlusIcon } from '@holism/icons';
import styled from 'styled-components';

import LikeButton from 'atoms/LikeButton/LikeButton';
import Paper from 'atoms/Paper/Paper';

const SH = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 18px;
`;

const SText = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 34px;
  color: #262c40;
`;

const SLikeAndButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SContainer = styled.div`
  padding: 32px;
`;

const DetailedIdeaCard = () => {
  return (
    <Paper>
      <SContainer>
        <SH>Организовать доставку пиццы в обед</SH>
        <SText>
          Обедать хочется, уходить из офиса – нет. Посему предлагаю начать скидываться каждый рабочий день на доставку
          пиццы в 14:00. Если будем брать, я не могу придумывать предложения но тут должно быть типа расширенное
          описание чтобы показать что в карточках оно как бы укороченное и всё такое
        </SText>
        <SLikeAndButton>
          <LikeButton />
          <Button dimension="small" width="260px" isWithIcon color="green">
            <PlusIcon style={{ marginRight: 15 }} size={20} color="white" />
            Добавить бизнес-решение
          </Button>
        </SLikeAndButton>
      </SContainer>
    </Paper>
  );
};

export default DetailedIdeaCard;
