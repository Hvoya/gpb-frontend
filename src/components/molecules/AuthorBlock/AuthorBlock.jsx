import React from 'react';

const AuthorSubBlock = ({ top, bottom }) => {
  return (
    <div>
      {top}
      {bottom}
    </div>
  );
};

const AuthorBlock = () => {
  return <div>
    <AuthorSubBlock top={} bottom={}/>
    <AuthorSubBlock top={} bottom={}/>
    <AuthorSubBlock top={} bottom={}/>
  </div>;
};

export default AuthorBlock;
