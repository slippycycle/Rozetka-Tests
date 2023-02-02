import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { Types } from "../../models/TypeModel"

type BrandListItem = {
    id: string | number
    value: string
}

export interface BrandState {

    selectedBrands: [] | string[],
    currentType: Types
    AllBrands: [] | string[],
    loading: boolean
    error: null | string
    brandsList: BrandListItem[] | []
}



export const initialState: BrandState = {
    selectedBrands: [],
    brandsList: [],
    AllBrands: [],
    currentType: {} as Types,
    loading: false,
    error: null,
}


export const fetchBrands = createAsyncThunk('brands/fetchBrands',

    async function (type: string, { rejectWithValue }) {

        try {

            console.log(type, `http://localhost:3001/types?type_like=${type}`)

            const response = axios.get<Types[]>(`http://localhost:3001/types?type_like=${type}`)


            const result = (await response).data


            return result[0] as Types

        } catch (error) {
            return rejectWithValue((error as AxiosError).message)
        }

    }
)




const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        // brandsFromCurrentType(state, action: PayloadAction<string[]>) {
        //     state.brandsFromCurrentType = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state) => {
                state.error = null
                state.loading = true
            },)
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.loading = false
                state.currentType = action.payload;
            },)
            .addCase(fetchBrands.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            },)
           
    }
})


export default brandSlice.reducer









