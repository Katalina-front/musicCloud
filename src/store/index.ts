import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { legacy_createStore as createStore } from 'redux'
import { reducer } from './reducers';

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });