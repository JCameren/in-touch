import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uiNotification: "",
    queriedUsers: [],
    isLoading: false,
    activeNav: JSON.parse(localStorage.getItem("activeNav")),
    userProfile: {}
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
        },
        changeActiveNav(state, action) {
            state.activeNav = action.payload
            localStorage.setItem("activeNav", JSON.stringify(action.payload))
        },
        queriedUsersResponse(state, action) {
            state.queriedUsers = action.payload
        },
        getUserProfile(state, action) {
            state.userProfile = action.payload
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice