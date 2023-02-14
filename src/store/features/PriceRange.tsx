import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    maxPrice: 100000,
    minPrice: 0,

}

const rangeSlice = createSlice({
    name: 'range',
    initialState,
    reducers: {
        setMaxRangePrice(state,action) {
            state.maxPrice = action.payload
        },
        setMinRangePrice(state,action) {
            state.minPrice = action.payload
        }
    }
})


export default rangeSlice.reducer


export const {setMaxRangePrice,setMinRangePrice} = rangeSlice.actions


