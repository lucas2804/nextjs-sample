import * as types from './actionTypes';
import initialState from './initialState';

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.TWEETS_REQUEST:
      return { ...state, loadedTweets: false };
    case types.TWEETS_SUCCESS:
      return {
        ...state,
        tweets: action.tweets,
        loadedTweets: true,
      };
    case types.TWEETS_FAIL:
      return {
        ...state,
        error_message: action.error.message,
        loadedTweets: false,
      };

    case types.CREATE_TWEET_REQUEST:
      return { ...state };
    case types.CREATE_TWEET_SUCCESS:
      return {
        ...state,
        createdTweet: action.tweet,
      };
    case types.CREATE_TWEET_FAIL:
      return {
        ...state,
        error_message: action.error.message,
      };
    case types.RETWEET_REQUEST:
      return { ...state };
    case types.RETWEET_SUCCESS:
      const { retweet } = action;
      const tweets = state.tweets.map(tweet => {
        if (tweet.id === retweet.tweetId) {
          if (retweet.retweeted === true) {
            tweet.numberOfRetweet = tweet.numberOfRetweet + 1;
          } else {
            tweet.numberOfRetweet = tweet.numberOfRetweet - 1;
          }
        }
        return tweet;
      });
      return {
        ...state,
        retweet,
        tweets,
      };
    case types.RETWEET_FAIL:
      return {
        ...state,
        error_message: action.error.message,
      };
    default:
      return state;
  }
}

export default reducer;
