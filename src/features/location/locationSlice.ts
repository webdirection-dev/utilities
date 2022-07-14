import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isUlyanovskaya: true,
    isUlyanovskayaOpacity: false,
    isOstrovskogoOpacity: false,
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation(state, action) {
            if (action.payload === 'ul') {
                state.isUlyanovskaya = true
            }

            if (action.payload === 'ost') {
                state.isUlyanovskaya = false
            }
        },

        setOpacity(state, action) {
            if (action.payload === 'ul') {
                state.isUlyanovskayaOpacity = true
                state.isOstrovskogoOpacity = false
            }

            if (action.payload === 'ost') {
                state.isUlyanovskayaOpacity = false
                state.isOstrovskogoOpacity = true
            }
        },
    }
})

export const {setLocation, setOpacity} = locationSlice.actions
export default locationSlice.reducer