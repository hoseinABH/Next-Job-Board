import { combineReducers } from 'redux';
// Reducers
import common from './Common/common.reducer';
import resume from './User/user.reducer';
import internship from './Internship/internships.reducer';
import auth from './Auth/auth.reducer';
import user from './User/user.reducer';
import panel from './Panel/panel.reducer';

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
  common,
  resume,
  internship,
  auth,
  user,
  panel,
});
export default rootReducer;
