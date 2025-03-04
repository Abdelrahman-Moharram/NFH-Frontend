import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { setAuth, setLogout } from '../features/authSlice';
import { Mutex } from 'async-mutex';
import { toast } from 'react-toastify';
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
	baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api/`,
	credentials: 'include',
});
const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	await mutex.waitForUnlock();
	let result = await baseQuery(args, api, extraOptions);

	if (result.error && result.error.status === 401) {
		if (!mutex.isLocked()) {
			const release = await mutex.acquire();
			try {
				const refreshResult : any = await baseQuery(
					{
						url: '/users/jwt/refresh/',
						method: 'POST',
					},
					api,
					extraOptions
				);
				if (refreshResult.data) {
					
    				// api.dispatch(setAuth());
					result = await baseQuery(args, api, extraOptions);
				} else {					
					// Cookies.remove('access_token')
					api.dispatch(setLogout());
				}
			} finally {
				release();
			}
		} else {
			await mutex.waitForUnlock();
			result = await baseQuery(args, api, extraOptions);
		}
	}
	else if(result.error && result.error.status === 403){
		toast.error('ليس لديك صلاحية تنفيذ هذا الطلب')
	}
	return result;
};

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({}),
	tagTypes: [
		'users', 
		'departments',
		'connections'
	],
});