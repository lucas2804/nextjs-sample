import * as types from './actionTypes';

export function tweetsRequest() {
  return { type: types.TWEETS_REQUEST };
}

export function tweetsSuccess(tweets) {
  return { type: types.TWEETS_SUCCESS, tweets };
}

export function tweetsFail(error) {
  return { type: types.TWEETS_FAIL, error };
}
