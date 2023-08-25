import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './ReduxSlice/CreateSlice'

export default configureStore({
  reducer: {
    ValidationData: sessionSlice,
  },
});




// NOTE         -

// configureStore is only accepting one parameter, which is an Object, which is called ConfigureStoreOptions.

// ConfigureStoreOptions has several attributes (? means optional):

// reducers
// middleware​?
// devTools​?
// preloadedState​?
// enhancers​?

// The most important and easy to understand are reducers, devTools, and preloadedState.

// reducers (object)
// the reducers attribute is the mandatory option that we put our reducers as attributes.
// The attribute name will be related to selector.