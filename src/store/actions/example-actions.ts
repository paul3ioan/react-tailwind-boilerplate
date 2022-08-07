import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { EXAMPLE__SET_LOADING, EXAMPLE__FETCH } from '../constants';

export const setExampleLoadingAction = createAction<boolean>(EXAMPLE__SET_LOADING);

export const fecthExampleActionAsync = createAsyncThunk(EXAMPLE__FETCH, async (__: never, thunkApi) => {
  thunkApi.dispatch(setExampleLoadingAction(true));
  try {
    // calls
  } catch {
    // swallow exception
  } finally {
    thunkApi.dispatch(setExampleLoadingAction(false));
  }
});
