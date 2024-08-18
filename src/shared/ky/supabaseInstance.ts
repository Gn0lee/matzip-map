import ky from 'ky';

const supabaseInstance = ky.extend({
	prefixUrl: 'https://ghefddlxuydvztcsjzqm.supabase.co/functions/v1',
	timeout: false,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
		'Content-Type': 'application/json',
	},
	retry: 0,
});

export default supabaseInstance;
