import { combineReducers } from 'redux';
// Reducers
import common from './Common/common.reducer';

// Combine all reducers together to control by redux reducers observer.
const rootReducer = combineReducers({
  common,
});
export default rootReducer;
