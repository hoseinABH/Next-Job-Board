import { all, fork } from 'redux-saga/effects';
// Sagas entities
import CommonSagas from './Common/common.sagas';
import ResumeSagas from './User/user.sagas';
import InternshipsSagas from './internship/internships.sagas';
import AuthSagas from './Auth/auth.sagas';
import UserSagas from './User/user.sagas';
import CompanySagas from './Company/company.sagas';
import PanelSagas from './Panel/panel.sagas';

/**
 * rootSaga
 * In this case, we need to merge all redux-saga sagas together to observe all dispatched actions.
 */
export default function* root() {
  yield all([
    fork(CommonSagas),
    fork(ResumeSagas),
    fork(InternshipsSagas),
    fork(AuthSagas),
    fork(UserSagas),
    fork(CompanySagas),
    fork(PanelSagas),
  ]);
}
