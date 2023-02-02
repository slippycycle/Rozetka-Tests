import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { Type } from "typescript"
import { Types } from "../../models/TypeModel"


export interface TypeState {
    types: Types[] | []
    loading: boolean
    error: null | string
    currentType: any | Types 
    currentBrands: string[] | []
}

const initialState: TypeState = {
    types: [],
    loading: false,
    error: null,
    currentType: {},
    currentBrands:[],
}

export const fetchTypes = createAsyncThunk('types/fetchTypes',

    async function (_, { rejectWithValue }) {

        try {

            const response = axios.get<Types[]>('http://localhost:3001/types')

            const result = (await response).data

            return result

        } catch (error) {
            
            return rejectWithValue((error as AxiosError ).message)
        }
    }
)


export const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setTypes(state, action: PayloadAction<Types[]>) {
            state.types = action.payload
        },
        setCurrentType(state, action: PayloadAction<Types>) {
            state.currentType = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTypes.pending, (state) => {
                state.error = null
                state.loading = true
            },)
            .addCase(fetchTypes.fulfilled, (state, action) => {
                state.loading = false
                state.types = action.payload;
            },)
            .addCase(fetchTypes.rejected,(state, action) => {
                        state.loading = false
                        state.error = action.payload as string 
                    }, )
    }
})

export default typeSlice.reducer

export const { setTypes,setCurrentType } = typeSlice.actions

