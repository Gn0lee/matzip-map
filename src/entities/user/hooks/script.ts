import { useState, useEffect } from 'react';

const KAKAO_SDK_URL = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js';

export const useKakaoSDK = (jsKey: string) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = KAKAO_SDK_URL;
		script.async = true;
		script.onload = () => {
			if (window.Kakao && !window.Kakao.isInitialized()) {
				window.Kakao.init(jsKey);
			}
			setIsLoaded(true);
		};
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
			if (window.Kakao && window.Kakao.isInitialized()) {
				window.Kakao.cleanup();
			}
			setIsLoaded(false);
		};
	}, [jsKey]);

	return { isLoaded };
};
