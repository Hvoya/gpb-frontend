import axios from 'axios';

import { baseUrl } from '@/enums/api_urls';
import { processServerError } from '@/utils/errors';
import { getToken } from '@/utils/ls';

function setHeaders(config) {
  config.headers.Authorization = 'Token ' + getToken();
  return config;
}

export function initAxios() {
  axios.defaults.baseURL = baseUrl;

  axios.interceptors.request.use(setHeaders, processServerError);
}
