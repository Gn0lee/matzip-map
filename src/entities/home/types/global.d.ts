export type {};

declare global {
	interface Window {
		Kakao: {
			init: (key: string) => void;
			isInitialized: () => boolean;
			cleanup: () => void;
			Auth: {
				authorize: (params: { redirectUri: string }) => void;
			};
		};
	}
}
