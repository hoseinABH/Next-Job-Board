import { combineReducers } from 'redux';
// Reducers
import common from './Common/common.reducer';
import resume from './Resume/resume.reducer';

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
  common,
  resume,
});
export default rootReducer;
