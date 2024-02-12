import { combineReducers } from 'redux';
// Reducers
import common from './Common/common.reducer';
import resume from './Resume/resume.reducer';
import jobs from './Jobs/jobs.reducer';
import auth from './Auth/auth.reducer';

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
  common,
  resume,
  jobs,
  auth,
});
export default rootReducer;
