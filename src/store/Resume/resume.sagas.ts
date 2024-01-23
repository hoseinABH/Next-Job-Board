/**
 * @module Sagas/Common
 * @desc All common sagas
 */

// Utilities
import { all } from 'redux-saga/effects';

export default function* networkListeners() {
  yield all([]);
}
