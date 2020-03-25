import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';
import * as apis from './apis';

function* tweetsRequest() {
  try {
    const { data } = yield call(apis.tweetsRequest);
    yield put(actions.tweetsSuccess(data));
  } catch (error) {
    yield put(actions.tweetsFail(error));
  }
}

export default function* watcherSaga() {
  yield takeLatest(types.TWEETS_REQUEST, tweetsRequest);
}
