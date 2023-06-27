import {  createSlice } from "@reduxjs/toolkit";

export const myContactSlice = createSlice({
    name: 'contact',
    initialState: {contacts: []},
    reducers: {
        add(state, action) {
            return [...state.contacts, action.payload]
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
})


export const {add, remove} = myContactSlice.actions
