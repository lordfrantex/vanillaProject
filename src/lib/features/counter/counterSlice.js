import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
    value: 0,

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})


// Action Creators are generated for each reduce function here
// export const { decrement, increment, decrementByAmount, incrementByAmount } = counterSlice
// export default counterSlice.reducer