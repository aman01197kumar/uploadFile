import { configureStore } from '@reduxjs/toolkit';
import fileUploadReducer from './fileUploadSlice';

// import {configureStore} from ''
// Create your Redux store

const store = configureStore({
  reducer: {
    fileUpload: fileUploadReducer,
    // Your reducers go here
  },
});

export default store;