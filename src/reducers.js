import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form'
import persons from './modules/persons';
import date from './modules/date';
import filter from './modules/filter';
import isSaving from './modules/isSaving';


const reducers = combineReducers({
  form: formReducer,
  persons,
  date,
  filter,
  isSaving,
});

export default reducers;
