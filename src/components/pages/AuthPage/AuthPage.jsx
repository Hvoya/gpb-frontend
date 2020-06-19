import React from 'react';

import SigninForm from 'organisms/SigninForm/SigninForm';
import SignupForm from 'organisms/SignupForm/SignupForm';

const AuthPage = () => {
  return (
    <div>
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default AuthPage;
