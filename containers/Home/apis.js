import getConfig from 'next/config';
import { decamelizeKeys } from 'humps';
import request from '../../utils/request';
import { convertParamsToQueryString } from '../../utils/helpers';

const baseApi = getConfig().publicRuntimeConfig.apiURL;

export function tweetsRequest() {
  return request(`${baseApi}/tweets`);
}
