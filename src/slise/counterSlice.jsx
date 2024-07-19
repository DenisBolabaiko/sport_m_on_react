import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'count',
    initialState,
    reducers:{
        Increment:
        state => {
            state.count += 1;
          },
        Decrement: state => {
            state.count -= 1;},
        Remove: state =>{
            state.count = 0
        },
        }
    }
)

export const { Increment, Decrement, Remove } = counterSlice.actions;

export default counterSlice.reducer;