import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/auth/userApi";
import { userSlice } from "../Slice/userSlice";
import { noticeApi } from "../Api/noticeApi";


export const store = configureStore({
  reducer:{
    [userApi.reducerPath]:userApi.reducer,
  [noticeApi.reducerPath]:noticeApi.reducer,
    [userSlice.name]:userSlice.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    userApi.middleware,
    noticeApi.middleware,
  ]),
});