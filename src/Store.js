import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './ReduxSlice/CreateSlice'

export default configureStore({
  reducer: {
    ValidationData: sessionSlice,
  },
});