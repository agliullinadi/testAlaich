import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
	endpoints: (builder) => ({ 
		getInfo: builder.query({
			query: () => {
				return {
					url: 'info',
					method: 'GET',
				};
			},
		}),
	}),
});

export const { useGetInfoQuery } = api;