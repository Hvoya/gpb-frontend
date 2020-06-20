import { LOGIN } from '@/store/actions/actionTypes';
import { loginApiCall } from '@/store/requests/user';

export function loginAction() {
  return {
    type: LOGIN,
  };
}

export function loginRequestAction() {
  return dispatch => loginApiCall('123', '123').finally(() => dispatch(loginAction()));
}
