import { configureStore } from '@reduxjs/toolkit';
import lightSlice  from './slices/lightSwitch';

export const store = configureStore({//This method configures the store
  reducer: {
    light:lightSlice //Each slice of state (with its reducers) must be passed to the store
  },
});


