/**
 * @module Sagas/Common
 * @desc All common sagas
 */

// Utilities
import { all, delay, put, takeLatest } from 'redux-saga/effects';
// Actions
import CommonActions from './resume.actions';
// Constants
import * as types from './resume.constants';

function* someSagasAction() {
  try {
    let obj: any = {};
    yield put(CommonActions.setAppLoading(true));
    yield delay(4000);
    if (!obj.name) {
      throw new Error('Something went wrong!');
    }
    console.log('some action');
  } catch (error) {
    console.log(error);
  } finally {
    yield put(CommonActions.setAppLoading(false));
  }
}

export default function* networkListeners() {
  yield all([takeLatest(types.SAGAS_SOME_ACTION, someSagasAction)]);
}
