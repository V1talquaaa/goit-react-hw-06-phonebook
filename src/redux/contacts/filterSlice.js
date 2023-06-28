import { createSlice } from '@reduxjs/toolkit';

export const myFilterSlice = createSlice({
  name: 'filter',
  initialState:  '',
  reducers: {
    filterContact(state, action) {

      return action.payload;
      
    },
  },
});

export const filterReducer = myFilterSlice.reducer;
export const { filterContact } = myFilterSlice.actions;
