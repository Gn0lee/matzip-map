import ky from 'ky';

const supabaseInstance = ky.extend({
	prefixUrl: 'https://ghefddlxuydvztcsjzqm.supabase.co/functions/v1',
	timeout: false,
	headers: {
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoZWZkZGx4dXlkdnp0Y3NqenFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMDUzMzUsImV4cCI6MjAzODc4MTMzNX0.-b3lt87iPCvP6DTzyeLi1jRN7MPSRCUU1h3MR0FpY1s',
		'Content-Type': 'application/json',
	},
	retry: 0,
});

export default supabaseInstance;
