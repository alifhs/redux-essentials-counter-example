import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import testReducer from '../features/counter/testSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    tester : testReducer
  },
});
