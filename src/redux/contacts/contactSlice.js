import {  createSlice } from "@reduxjs/toolkit";
import Notiflix from 'notiflix';

export const myContactSlice = createSlice({
    name: 'contact',
    initialState: {contacts: []},
    reducers: {
        add(state, action) {
            const name = state.contacts.map((contact) => contact.name.toLowerCase())
            if(name.includes(action.payload.name.toLowerCase())) {
                return Notiflix.Notify.failure('This contact already exist')
            }
            state.contacts.push(action.payload)
        },
        remove(state, action) {
            const index = state.contacts.findIndex(task => task.id === action.payload);
            state.contacts.splice(index, 1);
            
        },
        // updateContactList(state, action) {

        //     state.contacts = action.payload
        // }
    }
})

export const {add, remove, updateContactList} = myContactSlice.actions
