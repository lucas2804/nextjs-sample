import 'isomorphic-fetch';
import { camelizeKeys } from 'humps';
import Cookies from 'js-cookie';
import { parseJSON, checkStatus } from './requestHandlers';

const baseOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies.get('TOKEN')}`,
  },
};

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options = {}) {
  return fetch(url, { ...baseOptions, ...options })
    .then(checkStatus)
    .then(parseJSON)
    .then(camelizeKeys);
}
