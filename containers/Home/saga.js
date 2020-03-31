import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';
import * as apis from './apis';

function* tweetsRequest() {
  try {
    const { tweets } = yield call(apis.tweetsRequest);
    yield put(actions.tweetsSuccess(tweets));
  } catch (error) {
    yield put(actions.tweetsFail(error));
  }
}

function* createTweetRequest(action) {
  try {
    const { tweet } = yield call(apis.createTweetRequest, action.content);
    yield put(actions.createTweetSuccess(tweet));
  } catch (error) {
    yield put(actions.createTweetFail(error));
  }
}

function* retweetRequest(action) {
  try {
    const { retweet } = yield call(apis.retweetRequest, action.tweetId);
    yield put(actions.retweetSuccess(retweet));
  } catch (error) {
    yield put(actions.retweetFail(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(types.TWEETS_REQUEST, tweetsRequest);
  yield takeLatest(types.CREATE_TWEET_REQUEST, createTweetRequest);
  yield takeLatest(types.RETWEET_REQUEST, retweetRequest);
}
