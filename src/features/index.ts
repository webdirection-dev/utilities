import {combineReducers} from "@reduxjs/toolkit"
import authReducer from './auth/authSlice'
import locationReducer from './location/locationSlice'

export const rootReducer = combineReducers({
    authReducer,
    locationReducer,
})