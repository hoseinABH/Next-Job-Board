import { all, fork } from 'redux-saga/effects';
// Sagas entities
import CommonSagas from './Common/common.sagas';
import InternshipSagas from './Internship/internship.sagas';
import PanelSagas from './Panel/panel.sagas';
import UserSagas from './User/user.sagas';

/**
 * rootSaga
 * In this case, we need to merge all redux-saga sagas together to observe all dispatched actions.
 */
export default function* root() {
  yield all([fork(CommonSagas), fork(UserSagas), fork(InternshipSagas), fork(PanelSagas)]);
}
