import { createSlice } from "@reduxjs/toolkit";
import { addUserToLocal, clearUser, getUserFromLocal } from "../features/shared/localStorage";

export const userSlice = createSlice({
  name:'userSlice',
  initialState:({
      user:getUserFromLocal()
  }),
  reducers:{
    addUser:(state,action)=>{
      state.user = action.payload;
      addUserToLocal(state.user);
    },
    Logout:(state,action)=>{
      state.user = null;
      clearUser()
    }

  }
})

export const {addUser,Logout} = userSlice.actions;