import { LOGIN } from '@/store/actions/actionTypes';
import { loginApiCall } from '@/store/requests/user';

export function login() {
  return {
    type: LOGIN,
  };
}

export function loginRequest(dispatch) {
  return loginApiCall('123', '123').finally(() => dispatch(login()));
}
