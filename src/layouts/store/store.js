import { createStore, combineReducers } from 'redux';
import {Authentication} from './reducers/reducers';

export const myStore = createStore(Authentication);

console.log('store====>', myStore);