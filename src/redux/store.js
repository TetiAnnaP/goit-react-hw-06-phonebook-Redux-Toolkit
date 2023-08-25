import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './contactsReducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const enchancer = devToolsEnhancer();
export const store = createStore(rootReducer, enchancer);
