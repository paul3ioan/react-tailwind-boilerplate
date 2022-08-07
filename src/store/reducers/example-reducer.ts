import { createReducer } from '@reduxjs/toolkit';
import { setExampleLoadingAction } from '../actions/example-actions';

interface State {
  loading: boolean;
}
const initialState: State = {
  loading: false,
};

const exampleReducer = createReducer(initialState, builder => builder.addCase(setExampleLoadingAction, (state, action) => ({ ...state, loading: action.payload })));
export default exampleReducer;
