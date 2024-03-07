// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // Optionally, you can pass middleware, dev tools settings, etc.
});

export default store;
