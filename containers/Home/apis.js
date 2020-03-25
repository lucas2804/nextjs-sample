import getConfig from 'next/config';
import request from '../../utils/request';

const baseApi = getConfig().publicRuntimeConfig.apiURL;

export function tweetsRequest() {
  return request(`${baseApi}/tweets`);
}
