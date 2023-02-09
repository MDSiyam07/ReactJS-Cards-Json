import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Redux/Reducer';

export default configureStore({
  reducer: {
    Reducer
  },
});
