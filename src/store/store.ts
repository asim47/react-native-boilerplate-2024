import { configureStore } from '@reduxjs/toolkit';
import { AppThunk } from '../Helpers/reduxHooks';
import { UserReducer } from './reducers';
import { ConfigReducer } from './reducers/config.reducer';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    config: ConfigReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunkPromise<T> = AppThunk<Promise<T>>;
