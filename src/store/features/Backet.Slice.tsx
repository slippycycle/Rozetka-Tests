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

const basketSlice = createSlice({
    name:'backet',
    initialState,
    reducers: {
        deleteDeviceById(state, actions) {
           state.devices.filter((el) => el.id === actions.payload)
        },
        handleBacket(state) {
           state.backetActive = !state.backetActive
        },
        setDevicesIdFromBacket(state, actions) {
            state.devicesId = actions.payload
        },
        setDevicesFromBacket(state, actions) {
            state.devices = actions.payload
        },
        pushDevice(state, actions) {
            if (state.devices.find((el) => el.id == actions.payload.id)) {
                return state;
            }
            else {
                
                state.devices.push(actions.payload)
            }
        },
        addToTotalSum(state, actions) {
            
            state.totalSum += actions.payload
        }

    },
})

export default  basketSlice.reducer

export const {handleBacket,setDevicesFromBacket,pushDevice,addToTotalSum,setDevicesIdFromBacket,deleteDeviceById} = basketSlice.actions
