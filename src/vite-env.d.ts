/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_KAKAO_APP_KEY: string;
	readonly VITE_KAKAO_CALLBACK_URL: string;
	readonly VITE_SUPABASE_ANON_KEY: string;
	readonly VITE_SUPABASE_URL: string;
	readonly VITE_API_URL: string;
	readonly VITE_COOKIE_DOMAIN: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
