import React from 'react';
import styled from 'styled-components';
import { H1Promo, Paragraph, COLORS, Button } from '@holism/core';

import MainBannerImage from '@/assets/images/main-banner-image.png';
import CenterContentHoc from '@/components/HOC/CenterContentHOC';

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainClientBanner = () => {
  return (
    <CenterContentHoc>
      <SContainer>
        <div>
          <H1Promo style={{ marginBottom: '8px' }} font="48/52">
            BREATHTAKING
          </H1Promo>
          <Paragraph style={{ marginBottom: '25px' }} color={COLORS.azure} font="28/28">
            Портал для отличных идей и разумных <br /> предложений
          </Paragraph>
          <Button width="260px" dimension="small" view="rounded" color="green">
            Предложить идею
          </Button>
        </div>
        <img src={MainBannerImage} />
      </SContainer>
    </CenterContentHoc>
  );
};

export default MainClientBanner;
