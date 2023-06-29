import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export const myContactSlice = createSlice({
  name: 'contact',
  initialState: { contacts: [] },
  reducers: {
    add(state, { payload }) {
      const name = state.contacts.map(contact => contact.name.toLowerCase());
      if (name.includes(payload.name.toLowerCase())) {
        return Notiflix.Notify.failure('This contact already exist');
      }
      const newContact = { id: nanoid(), ...payload };
      return {
        ...state,
        contacts: [...state.contacts, newContact],
      };
    },
    remove(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    },
  },
});

export const { add, remove, searchByFilter } = myContactSlice.actions;
