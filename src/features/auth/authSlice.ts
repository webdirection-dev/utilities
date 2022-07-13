import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    email: JSON.parse(localStorage.getItem('user') as string) || null,
    token: '',
    id: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        }
    },
})

export const {setAuth} = authSlice.actions
export default authSlice.reducer