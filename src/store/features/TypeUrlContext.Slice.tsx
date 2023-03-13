import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BacketState {
    reload: boolean
    typeByCurrentUrl: string
}

export const initialState:BacketState = {
    reload: false,
    typeByCurrentUrl: window.location.pathname.replaceAll('/', '').replaceAll(' ','')
   
}

const typeUrlSLice = createSlice({
    name:'typeUrl',
    initialState,
    reducers: {
        setCurrentTypeByUrl(state, action: PayloadAction<string>) {
           
                state.typeByCurrentUrl = action.payload
            
        } 

    },
})

export default typeUrlSLice.reducer

export const {setCurrentTypeByUrl} = typeUrlSLice.actions
