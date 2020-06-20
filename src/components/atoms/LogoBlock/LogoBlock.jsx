import React from 'react';
import { LogoGpbWhiteIcon } from '@holism/icons';
import { layoutConstants } from '@/enums/layout';

const LogoBlock = () => {
  return (
    <LogoGpbWhiteIcon
      style={{
        height: layoutConstants.clientLogoHeight,
        width: '170px',
      }}
    />
  );
};

export default LogoBlock;
