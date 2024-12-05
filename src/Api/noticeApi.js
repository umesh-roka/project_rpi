import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { noticeUrl } from "../constant/constant";


export const noticeApi = createApi({
  reducerPath:'orderApi',
  baseQuery:fetchBaseQuery({
    baseUrl:noticeUrl
  }),
  endpoints:(builder)=>({
    addNotice:builder.mutation({
      query:(query)=>({
        url:'/',
        method:'POST',
        body:query.body,
      })
    }),
    getAllNotice:builder.query({
      query:(query)=>({
        url:'/',
        method:'GET',

      })
    })
  })
})

export const {useAddNoticeMutation,useGetAllNoticeQuery} = noticeApi;