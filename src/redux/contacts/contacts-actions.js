import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add');
export const deletContact = createAction('contact/delet');
export const changeFilter = createAction('filter/change');
