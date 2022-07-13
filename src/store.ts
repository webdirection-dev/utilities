import {configureStore} from "@reduxjs/toolkit"
import {rootReducer} from "./features"

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
