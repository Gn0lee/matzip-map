import ky from 'ky';

export const matzipApiInstance = ky.extend({
	prefixUrl: import.meta.env.VITE_API_URL,
	timeout: false,
	headers: {
		'Content-Type': 'application/json',
	},
	retry: 0,
	credentials: 'include',
});
