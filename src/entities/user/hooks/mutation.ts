import { useMutation } from '@tanstack/react-query';
import supabaseInstance from 'src/shared/ky/supabaseInstance';
import { useNavigate } from '@tanstack/react-router';
import { useToast } from '@chakra-ui/react';
import { User } from 'src/entities/user/types/user';
import { Auth } from 'src/entities/user/types/auth';
import { SESSION_STORAGE_KEYS } from 'src/shared/constants/storage';

const FAIL_TOAST_ID = 'fail-toast';

export const usePostOauthKakaoCallback = () => {
	const navigate = useNavigate();

	const toast = useToast();

	return useMutation({
		mutationFn: (code: string) =>
			supabaseInstance
				.post('oauth/kakao', {
					body: JSON.stringify({ code, redirect_uri: import.meta.env.VITE_KAKAO_CALLBACK_URL }),
				})
				.json<{ user: User } & Auth>(),
		onSuccess: data => {
			sessionStorage.setItem(SESSION_STORAGE_KEYS.ACCESS_TOKEN, data.access_token);
			sessionStorage.setItem(SESSION_STORAGE_KEYS.REFRESH_TOKEN, data.refresh_token);

			navigate({ to: '/' });
		},
		onError: () => {
			if (!toast.isActive(FAIL_TOAST_ID)) {
				toast({
					title: '로그인에 실패했습니다.\n다시 시도해주세요.',
					status: 'error',
					duration: 9000,
					isClosable: true,
					position: 'top',
					id: FAIL_TOAST_ID,
				});
			}

			navigate({ to: '/user' });
		},
		retry: false,
	});
};
