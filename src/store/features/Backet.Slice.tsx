import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { DeviceI } from "../../models/models"


type deviceId = string | number

interface BacketState {
    devicesArray: DeviceI[] | []
    backetActive: boolean
}

export const initialState:BacketState = {
    devicesArray: [],
    backetActive: false,
   
}

// export const fetchBasketDevice = createAsyncThunk('backet/fetchBasketDevices',

// async function (id: any ,{ rejectWithValue }) {
//     try { 

//         const responose = await axios.get(`http://localhost:3001/products?id=${id}`)

//         return responose.data as DeviceI[]


//     }  catch (e) {
//         return rejectWithValue((e as AxiosError).message)
//     } 
// }



// )


const basketSlice = createSlice({
    name:'backet',
    initialState,
    reducers: {
        handleBacket(state) {
           state.backetActive = !state.backetActive
        },
        setDevicesFromBacket(state, actions) {
            state.devicesArray = actions.payload
        }

    },
})

export default  basketSlice.reducer

export const {handleBacket,setDevicesFromBacket} = basketSlice.actions
