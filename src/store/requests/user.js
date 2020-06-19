import axios from 'axios';
import { api_urls } from '@/enums/api_urls';

export function loginApiCall(username, password) {
  return axios
    .post(api_urls.login, {
      username,
      password,
    })
    .then(r => console.log(r));
}
