import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	GetAuthorResponse,
	GetInfoResponse,
	GetLoginRequestData,
	GetLoginResponse,
	GetLogoutResponse,
	GetProfileParams,
	GetProfileResponse,
	GetQuoteParams,
	GetQuoteResponse,
} from '../shared/api/types';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
	endpoints: (builder) => ({
		getInfo: builder.query<GetInfoResponse, {}>({
			query: () => {
				return {
					url: 'info',
					method: 'GET',
				};
			},
		}),

		login: builder.mutation<GetLoginResponse, GetLoginRequestData>({
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
		getProfile: builder.query<GetProfileResponse, GetProfileParams>({
			query: ({ token }) => {
				return {
					url: `profile&token=${token}`,
					method: 'GET',
				};
			},
		}),

		getAuthor: builder.query<GetAuthorResponse, {}>({
			query: () => {
				return {
					url: 'author',
					method: 'GET',
				};
			},
		}),

		getQuote: builder.query<GetQuoteResponse, GetQuoteParams>({
			query: ({ authorId }) => {
				return {
					url: `quote?authorId=${authorId}`,
					method: 'GET',
				};
			},
		}),

		logout: builder.query<GetLogoutResponse, {}>({
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
