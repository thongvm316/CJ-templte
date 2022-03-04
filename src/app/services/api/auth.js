import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "./axiosClient"

const RESOURCES = {
  login: "/pibo/api/login",
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (params) => ({
        url: RESOURCES.login,
        method: "POST",
        data: {
          id: params.id,
          password: params.password,
        },
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
