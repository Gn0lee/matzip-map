import { createClient } from '@supabase/supabase-js';
import Cookies from 'js-cookie';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY, {
	auth: {
		flowType: 'pkce',
		storage: {
			getItem: key => {
				const value = Cookies.get(key);
				return value ? value : null;
			},
			setItem: (key, value) => {
				Cookies.set(key, value, {
					path: '/',
					httpOnly: false,
					sameSite: 'none',
					secure: true,
				});
			},
			removeItem: key => {
				Cookies.remove(key, {
					path: '/',
					httpOnly: false,
					sameSite: 'none',
					secure: true,
				});
			},
		},
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true,
	},
});

export default supabase;
