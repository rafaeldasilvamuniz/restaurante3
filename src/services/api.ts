import { createApi, fetchBaseQuery } from '@redux/toolkit/query/react'
import { Pizzas } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes/'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Pizzas, void>({
      query: () => 'destaque'
    }),
    getGame: builder.query<Pizzas, string>({
      query: (id) => `lista/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetGameQuery
} = api

export default api
