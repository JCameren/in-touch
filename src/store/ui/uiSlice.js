import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uiNotification: "",
    isLoading: false
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        showNotification(state, action) {
            state.uiNotification = {
                message: action.payload.message
            }
        },
        removeNotification(state) {
            state.uiNotification = ""
        },
        nowLoading(state) {
            state.isLoading = true
        },
        stoppedLoading(state) {
            state.isLoading = false
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice