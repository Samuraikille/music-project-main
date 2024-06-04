import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILyricsBySearch, ISongsText } from './Types';

export const lyricsApi = createApi({
  reducerPath: 'lyricsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'f03f22612dmsh7e6489b1f55547cp1d46f4jsna43d1a1424a7');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getLyricsBySearch: builder.query<ILyricsBySearch, string>({
      query: (q) => ({
        url: '/search/',
        params: {
          q,
          per_page: '10',
          page: '1'
        },
      }),
    }),
    getSongsDetails: builder.query<ISongsText, string>({
      query: (id) => ({
        url: `/song/lyrics/`,
        method: 'GET',
        params: {
          id
        }
      }),
    }),
  }),
});

export const { useGetLyricsBySearchQuery, useGetSongsDetailsQuery } = lyricsApi;
