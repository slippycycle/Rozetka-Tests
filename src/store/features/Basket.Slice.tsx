import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { DeviceI } from "../../models/models"


type deviceId = string | number

type deviceFromBasket = {
    id: deviceId
    count: number
}

interface BacketState {
    devicesId: [] | number[] | string[]
    basketActive: boolean
    totalSum: number
    devices: DeviceI[],
    devicesIdCounts: deviceFromBasket[]

}

export const initialState: BacketState = {
    devicesId: [],
    basketActive: false,
    totalSum: 0,
    devices: [],
    devicesIdCounts: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        deleteDeviceById(state, actions) {
            state.devices.filter((el) => el.id === actions.payload)
        },
        handleBasket(state) {
            state.basketActive = !state.basketActive
        },

        dleteItemFromDeviceInfo(state, action) {
            state.devicesIdCounts = state.devicesIdCounts.filter((dev) => dev.id !== action.payload)
        },
        setCurrentCountAtDevicesInfo(state, action) {

            for (let i = 0; i < state.devicesIdCounts.length; i++) {

                if (state.devicesIdCounts[i].id == action.payload.id) {
                    state.devicesIdCounts[i] = action.payload
                }
            }

        },
        pushDeviceInfo(state, action) {
            state.devicesIdCounts.push(action.payload)
        },
        setDevicesIdFromBasket(state, actions) {
            state.devicesId = actions.payload
        },
        setDevicesFromBasket(state, actions) {
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
        },
        removeFromTotalSum(state, action) {
            state.totalSum -= action.payload
        },
        setTotalSum(state, action) {
            state.totalSum = action.payload
        },
        setStartDevicesInfo(state, action) {

            const result = [];

            for (let i = 0; i < action.payload.length; i++) {

                result.push({ id: action.payload[i], count: 1 })

            }

            state.devicesIdCounts = result
        }
    },
})

export default basketSlice.reducer

export const {
    pushDeviceInfo,
    dleteItemFromDeviceInfo,
    setCurrentCountAtDevicesInfo,
    handleBasket,
    setTotalSum,
    removeFromTotalSum,
    setDevicesFromBasket,
    pushDevice,
    setStartDevicesInfo,
    addToTotalSum,
    setDevicesIdFromBasket,
    deleteDeviceById
} = basketSlice.actions



