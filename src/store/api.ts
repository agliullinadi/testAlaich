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

		login: builder.mutation({
			query: ({ ...requestData }) => {
				return {
					url: 'login',
					method: 'POST',
					body: {
						...requestData,
					},
				};
			},
		}),
		getProfile: builder.query({
			query: ({ token }) => {
				return {
					url: `profile&token=${token}`,
					method: 'GET',
				};
			},
		}),

		getAuthor: builder.query({
			query: () => {
				return {
					url: 'author',
					method: 'GET',
				};
			},
		}),

		getQuote: builder.query({
			query: () => {
				return {
					url: 'quote',
					method: 'GET',
				};
			},
		}),

		logout: builder.query({
			query: () => {
				return {
					url: 'logout',
					method: 'GET',
				};
			},
		}),
	}),
});

export const {
	useGetInfoQuery,
	useLazyGetInfoQuery,
	useLoginMutation,
	useLazyGetProfileQuery,
	useLazyGetAuthorQuery,
	useLazyGetQuoteQuery,
	useLazyLogoutQuery,
} = api;
