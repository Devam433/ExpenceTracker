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
            console.log(state.userData)
            state.userData = null;
            state.status = false;
            console.log('User data is now null')
            console.log(state.userData)
        },
    }
})

export const { login,logout } = authSlice.actions;
export default authSlice.reducer;