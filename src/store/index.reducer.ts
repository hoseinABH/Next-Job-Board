import { combineReducers } from 'redux';
// Reducers
import common from './Common/common.reducer';
import internship from './Internship/internship.reducer';
import panel from './Panel/panel.reducer';
import user from './User/user.reducer';

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
  common,
  internship,
  user,
  panel,
});
export default rootReducer;
