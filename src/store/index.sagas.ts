import { all, fork } from 'redux-saga/effects';
// Sagas entities
import CommonSagas from './Common/common.sagas';
import ResumeSagas from './Resume/resume.sagas';
import JobsSagas from './Jobs/jobs.sagas';
import AuthSagas from './Auth/auth.sagas';
import UserSagas from './User/user.sagas';

/**
 * rootSaga
 * In this case, we need to merge all redux-saga sagas together to observe all dispatched actions.
 */
export default function* root() {
  yield all([
    fork(CommonSagas),
    fork(ResumeSagas),
    fork(JobsSagas),
    fork(AuthSagas),
    fork(AuthSagas),
    fork(UserSagas),
  ]);
}
