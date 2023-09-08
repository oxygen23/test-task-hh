import { API_KEY } from '@/utils/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com',
  }),
  endpoints: (builder) => ({
    getBookById: builder.query({
      query: (id) => `books/v1/volumes/${id}`,
    }),
    getBooksbyQueryes: builder.query({
      query: ({ inputValue, category, sortingBy, pagination }) =>
        `books/v1/volumes?q=${inputValue}+subject:${category}&orderBy=${sortingBy}&startIndex=${pagination}&key=${API_KEY}`,
    }),
  }),
});

export const { useGetBooksbyQueryesQuery, useGetBookByIdQuery } = api; // Экспортируйте хуки для использования в компонентах

export const { reducerPath } = api; // Экспортируйте путь редуктора для использования в конфигурации Redux
