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

export function createTweetRequest(content) {
  return { type: types.CREATE_TWEET_REQUEST, content };
}

export function createTweetSuccess(tweet) {
  return { type: types.CREATE_TWEET_SUCCESS, tweet };
}

export function createTweetFail(error) {
  return { type: types.CREATE_TWEET_FAIL, error };
}

export function retweetRequest(tweetId) {
  return { type: types.RETWEET_REQUEST, tweetId };
}

export function retweetSuccess(retweet) {
  return { type: types.RETWEET_SUCCESS, retweet };
}

export function retweetFail(error) {
  return { type: types.RETWEET_FAIL, error };
}
