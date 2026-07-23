import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePage from './screens/homePage';
import homePageReducer from './screens/homePage/slice';

export const store = configureStore({
  reducer: {
    HomePage: homePageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
