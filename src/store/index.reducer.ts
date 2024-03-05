import { combineReducers } from 'redux';
// Reducers
import common from './Common/common.reducer';
import resume from './Resume/resume.reducer';
import jobs from './Jobs/jobs.reducer';
import auth from './Auth/auth.reducer';
import user from './User/user.reducer';
import company from './Company/company.reducer';
import panel from './Panel/panel.reducer';

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
  common,
  resume,
  jobs,
  auth,
  user,
  company,
  panel,
});
export default rootReducer;
