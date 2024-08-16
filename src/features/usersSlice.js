import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDocAllDetails: null,
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers:{
        addUser:(state,action)=>{  
            console.log(action.payload);
            state.userDocAllDetails = action.payload;
            console.log('userSLice ',state.userDocAllDetails)
        },
        remove:(state)=>{
            state.userDocAllDetails = null;
        }
    }
})

export const { addUser,remove } = usersSlice.actions;
export default usersSlice.reducer;
