import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: '',
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        setCategoryId(state, action){
            state.categoryId = action.payload;
        }
    }
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;