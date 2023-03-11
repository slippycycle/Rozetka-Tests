import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { DeviceI } from "../../models/models"


type deviceId = string | number

export type deviceFromBasket = {
   
}

type UniqueStringId = string


export interface ModifiedDeviceItem  extends DeviceI  {
    innerId: UniqueStringId
    count: number
    color: string
} 

interface BacketState {
    devicesFromBasket :ModifiedDeviceItem[] 
    loading: boolean

}

export const initialState: BacketState = {
    devicesFromBasket: [],
    loading: true
}

const basketDevicesSlice = createSlice({
    name: 'basketDevices',
    initialState,
    reducers: {
      
        setBasketDevices(state, action) {
           
        },
        pushBasketDevices (state, action) {
            state.devicesFromBasket.push(action.payload)
          
        },
        deleteBasketDevcie (state, action) {
               state.devicesFromBasket = state.devicesFromBasket.filter( (dev) => dev.innerId !== action.payload)
        },
        loadingHandle( state, action: PayloadAction<boolean>) {
            state.loading  = action.payload
        },
        setCurrentCountAtDevices(state, action) {

            for (let i = 0; i < state.devicesFromBasket.length; i++) {

                if (state.devicesFromBasket[i].innerId == action.payload.innerId) {

                    state.devicesFromBasket[i].count = action.payload.count
                }
            }

        },
     }

       
})

export default basketDevicesSlice.reducer

export const {setBasketDevices,pushBasketDevices,deleteBasketDevcie,loadingHandle,setCurrentCountAtDevices} = basketDevicesSlice.actions



