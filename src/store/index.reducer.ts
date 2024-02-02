import { combineReducers } from 'redux';
// Reducers
import common from './Common/common.reducer';
import resume from './Resume/resume.reducer';
import jobs from './Jobs/jobs.reducer';

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
  common,
  resume,
  jobs,
});
export default rootReducer;
