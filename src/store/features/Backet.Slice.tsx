import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type deviceId = string | number

interface BacketState {
    selectedDevicesId: deviceId[]
}

export const initialState:BacketState = {
    selectedDevicesId: [],
   
}


const basketSlice = createSlice({
    name:'backet',
    initialState,
    reducers: {
        addSelectedDeviceId(state, action: PayloadAction<deviceId>) {
            state.selectedDevicesId.push(action.payload as string )
        },
        removeSelectedDeviceId (state, action: PayloadAction<deviceId>) {
            state.selectedDevicesId =  state.selectedDevicesId.filter((id) =>   action.payload !== id )
         }
    }
})

export default  basketSlice.reducer

export const {addSelectedDeviceId,removeSelectedDeviceId} = basketSlice.actions
