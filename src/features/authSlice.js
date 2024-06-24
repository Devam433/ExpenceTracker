import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null,
    userAvatar:null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers:{
        login: (state, action)=>{
            state.status = true;
            state.userData = action.payload;
        },
        logout: (state)=>{
            state.userData = null;
            state.status = false;
        },
    }
})

export const { login,logout } = authSlice.actions;
export default authSlice.reducer;