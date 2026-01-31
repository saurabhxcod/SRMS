import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/users',credentials:'include' }),
  endpoints: (build) => ({
    login: build.mutation({
        query: (data) =>({
            url:'./login',
            method: 'POST',
            body: data
        })
    }),
    getProfile:build.mutation({
        query: () =>"./profile"
    }),
    logout:build.mutation({
        query:()=>({
            url: './logout',
            method: 'POST'
        })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useGetProfileMutation, useLogoutMutation } = authApi;