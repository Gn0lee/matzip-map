import { useEffect, useRef } from 'react';

import { Route as KakaoRoute } from 'src/routes/oauth.kakao.callback';
import { usePostOauthKakaoCallback } from 'src/entities/user/hooks/mutation';

export const useKakaoOauthCallback = () => {
	const { code, groupId } = KakaoRoute.useSearch();

	const isInitialized = useRef(false);

	const { mutate } = usePostOauthKakaoCallback();

	useEffect(() => {
		if (code && !isInitialized.current) {
			mutate({ code, groupId });
			isInitialized.current = true;
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
