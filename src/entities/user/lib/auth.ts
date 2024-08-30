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
					expires: 365, // 1년
					sameSite: 'Lax',
					secure: import.meta.env.PROD,
				});
			},
			removeItem: key => {
				Cookies.remove(key, {
					sameSite: 'Lax',
					secure: import.meta.env.PROD,
				});
			},
		},
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true,
	},
});

export default supabase;
