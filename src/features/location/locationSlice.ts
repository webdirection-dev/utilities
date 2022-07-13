import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isUlyanovskaya: true,
    isOstrovskogo: false,
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation(state, action) {
            if (action.payload === 'ul') {
                state.isUlyanovskaya = true
                state.isOstrovskogo = false
            }

            if (action.payload === 'ost') {
                state.isUlyanovskaya = false
                state.isOstrovskogo = true
            }
        }
    }
})

export const {setLocation} = locationSlice.actions
export default locationSlice.reducer