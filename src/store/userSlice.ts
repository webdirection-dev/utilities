import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    email: JSON.parse(localStorage.getItem('user') as string) || null,
    token: '',
    id: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        }
    },
})

export const {setUser} = userSlice.actions
export default userSlice.reducer