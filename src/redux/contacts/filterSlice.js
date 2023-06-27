import { createSlice } from '@reduxjs/toolkit';


export const myFilterSlice = createSlice({
  name: 'filter',
  initialState: {filter: ''},
  reducers: {
    filterContact(state, action) {
      // return state.filter(contact => contact.name.toLowerCase().include(action.payload.toLowerCase()))
      // const filteredContact = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      return action.payload;
    },
  },
});

export const filterReducer = myFilterSlice.reducer;
export const { filterContact } = myFilterSlice.actions;
