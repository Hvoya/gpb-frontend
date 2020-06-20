import React from 'react';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '@/store/actions/user';

const SigninForm = () => {
  const dispatch = useDispatch();
  dispatch(loginRequestAction());

  return (
    <div>
      Signin
    </div>
  );
};

export default SigninForm;