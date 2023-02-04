import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { Brand, Brands, DeviceI, sortDevicestypes } from "../../models/models"


export interface DeviceState {
    devices: [] | DeviceI[]
    loading: boolean
    error: AxiosError | null
    currentSortType: sortDevicestypes
}

interface Params {
    brand: Brands
    type: string
    _sort?: string
    _order?: string
}

const initialState = {
    devices: [],
    loading: false,
    currentSortType: '',
    error: null
}

export const fetchProducts = createAsyncThunk('product/fetchProducts',

    //http://localhost:3001/products?type=phone&brand=apple&brand=samsung

    async function (fetchParams: Params, { rejectWithValue }) {
        try {


            const response = await axios.get<DeviceI[]>(`http://localhost:3001/products`, { params: fetchParams }
            )

            console.log(response.data)
            return response.data as DeviceI[]

        } catch (e) {
            return rejectWithValue((e as AxiosError).message)
        }
    }
)


const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSortType(state, action: PayloadAction<sortDevicestypes>) {
            state.currentSortType = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.error = null
                state.loading = true
            },)
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.devices = action.payload as []
            },)
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as null
            },)
    }

})

export default productsSlice.reducer


export const { setSortType } = productsSlice.actions