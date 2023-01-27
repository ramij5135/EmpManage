// import { createStore, combineReducers } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {Authentication} from './reducers/reducers';

export const store = configureStore({
    reducer: Authentication,
})