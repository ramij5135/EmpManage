import { createSore } from 'redux';
import {RootReducers} from '../reducer';

const Store = createSore(RootReducers);

export default Store;