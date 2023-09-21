import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count: 1000, 
}

const countSlice = createSlice ({
    name: 'count',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
    },
})

export const {increment, decrement} =countSlice.actions;
export default countSlice.reducer ;