import * as types from './actionTypes';

export function tweetsRequest() {
  return { type: types.TWEETS_REQUEST };
}

export function tweetsSuccess(data) {
  return { type: types.TWEETS_SUCCESS, data };
}

export function tweetsFail(error) {
  return { type: types.TWEETS_FAIL, error };
}
