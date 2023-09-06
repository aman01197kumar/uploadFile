import { combineReducers } from 'redux';
import fileUploadReducer from './fileUploadSlice';

export type RootState = ReturnType<typeof rootReducer>;

// Create the root reducer by combining individual reducers
const rootReducer = combineReducers({
  fileUpload: fileUploadReducer,
  // Add other reducers here if needed
});