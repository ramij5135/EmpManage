// import { createStore, combineReducers } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {Authentication} from './reducers/reducers';
import {RootReducers} from './reducers/combineReducer';

export const store = configureStore({
    reducer: RootReducers,
})