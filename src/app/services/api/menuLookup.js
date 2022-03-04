import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "./axiosClient"

const RESOURCES = {
  menu: "/pibo/api/menu",
}

export const menuLookupApi = createApi({
  reducerPath: "menuLookupApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getMenuList: builder.mutation({
      query: () => ({
        url: RESOURCES.menu,
        method: "GET",
      }),
    }),
  }),
})

export const { useGetMenuListMutation } = menuLookupApi
