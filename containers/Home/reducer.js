import * as types from './actionTypes';
import initialState from './initialState';

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.TWEETS_REQUEST:
      return { ...state, loadedTweets: false };
    case types.TWEETS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loadedTweets: true,
      };
    case types.TWEETS_FAIL:
      return {
        ...state,
        error_message: action.error.message,
        loadedTweets: false,
      };
    default:
      return state;
  }
}

export default reducer;
