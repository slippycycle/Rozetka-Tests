import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { count } from "console"
import { DeviceI } from "../../models/models"


type deviceId = string | number

interface ChatSlice {
    chatItemsOpened: number
    topChatItems: number

    
}

export const initialState: ChatSlice = {
    topChatItems: 0,
    chatItemsOpened: 20,
    

}

const ChatSLice = createSlice({
    name: 'basket',
    initialState,
    reducers: {

        makeChateStepTobottom(state) {
            state.chatItemsOpened  = state.chatItemsOpened  + 10
            state.topChatItems = state.topChatItems + 10
        },
        makeChatStepToTop(state) {
            state.chatItemsOpened  = state.chatItemsOpened  - 10
            state.topChatItems = state.topChatItems - 10
        }

      

    },
})

export default ChatSLice.reducer

export const {makeChateStepTobottom,makeChatStepToTop  } = ChatSLice.actions
