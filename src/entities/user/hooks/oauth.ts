import { useEffect, useRef } from 'react';


import { usePostOauthKakaoCallback } from 'src/entities/user/hooks/mutation';

export const useKakaoOauthCallback = ({ nextPath, code }: { nextPath: string; code?: string }) => {
	

	const isInitialized = useRef(false);

	const { mutate } = usePostOauthKakaoCallback();

	useEffect(() => {
		if (code && !isInitialized.current) {
			mutate({ code, nextPath });
			isInitialized.current = true;
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
