import {
  configureStore, getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {createWrapper} from "next-redux-wrapper";
import reducer from '../reducers';

const middleware = [...getDefaultMiddleware({
  serializableCheck: false,
})];

const initializeStore = () => configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});


export const wrapper = createWrapper(initializeStore, {debug: true});

