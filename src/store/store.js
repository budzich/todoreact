import reducer from './reducer';
import {createStore} from 'redux';

const store = (!localStorage.hasOwnProperty('main')) ? createStore(reducer, []) : createStore(reducer, JSON.parse(localStorage.getItem('main')));

export default store;
