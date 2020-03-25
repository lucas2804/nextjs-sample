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

export default function* watcherSaga() {
  yield takeLatest(types.TWEETS_REQUEST, tweetsRequest);
}
