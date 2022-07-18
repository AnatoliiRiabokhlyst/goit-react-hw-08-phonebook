import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deletContact, changeFilter } from './contacts-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deletContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload.toLowerCase(),
});

export default combineReducers({
  items,
  filter,
});
