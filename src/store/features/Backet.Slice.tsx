import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { DeviceI } from "../../models/models"


type deviceId = string | number

interface BacketState {
    devicesId: [] | number[] | string[] 
    backetActive: boolean
    totalSum: number
    devices: DeviceI[]
}

export const initialState:BacketState = {
    devicesId: [],
    backetActive: false,
    totalSum: 0,
    devices: []
   
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
            state.devicesId = actions.payload
        },
        pushDevice(state, actions) {
            state.devices.push(actions.payload)
        },
        deleteDevice(state, actions) {
            state.devices = state.devices.filter((dev) => dev.id !== actions.payload)
        }

    },
})

export default  basketSlice.reducer

export const {handleBacket,setDevicesFromBacket,pushDevice,deleteDevice} = basketSlice.actions
