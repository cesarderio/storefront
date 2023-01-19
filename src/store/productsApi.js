import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseURL: 'https://api-js401.herokuapp.com/api/v1' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products'
    })
  })
})

export const { useGetAllProductsQuery } = productsApi
