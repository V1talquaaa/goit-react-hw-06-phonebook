import {  createSlice } from "@reduxjs/toolkit";

export const myContactSlice = createSlice({
    name: 'contact',
    initialState: [],
    reducers: {
        add(state, action) {
            console.log(action.payload)
            console.log(state)
            return [...state, action.payload]
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
})


export const {add, remove} = myContactSlice.actions
