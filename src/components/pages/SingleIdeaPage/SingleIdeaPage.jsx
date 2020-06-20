import React from 'react';

import DetailedIdeaCard from 'organisms/DetailedIdeaCard/DetailedIdeaCard';
import CenterContentHoc from '@/components/HOC/CenterContentHOC';

const SingleIdeaPage = () => {
  return (
    <CenterContentHoc>
      <DetailedIdeaCard />
    </CenterContentHoc>
  );
};

export default SingleIdeaPage;
