import getConfig from 'next/config';
import { decamelizeKeys } from 'humps';
import request from '../../utils/request';

const baseApi = getConfig().publicRuntimeConfig.apiURL;

export function tweetsRequest() {
  return request(`${baseApi}/tweets`);
}

export function createTweetRequest(content) {
  const userId = 1;
  const body = JSON.stringify(decamelizeKeys({ userId, content }));
  const options = {
    method: 'POST',
    body,
  };
  const endpoint = `${baseApi}/tweets`;
  return request(endpoint, options);
}

export function retweetRequest(tweetId) {
  const userId = 1;
  const body = JSON.stringify(decamelizeKeys({ userId, tweetId }));
  const options = {
    method: 'POST',
    body,
  };
  const endpoint = `${baseApi}/retweets`;
  return request(endpoint, options);
}
