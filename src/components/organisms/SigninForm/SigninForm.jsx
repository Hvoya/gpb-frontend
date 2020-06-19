import React from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '@/store/actions/user';

const SigninForm = () => {
  const dispatch = useDispatch();
  dispatch(loginRequest());

  return (
    <div>
      Signin
    </div>
  );
};

export default SigninForm;