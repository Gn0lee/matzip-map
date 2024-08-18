import { useMutation } from '@tanstack/react-query';
import supabaseInstance from 'src/shared/ky/supabaseInstance';
import { useNavigate } from '@tanstack/react-router';
import { useToast } from '@chakra-ui/react';

const FAIL_TOAST_ID = 'fail-toast';

export const usePostOauthKakaoCallback = () => {
	const navigate = useNavigate();

	const toast = useToast();

	return useMutation({
		mutationFn: (code: string) =>
			supabaseInstance.post('oauth/kakao', {
				body: JSON.stringify({ code, redirect_uri: 'http://localhost:5173/oauth/kakao/callback' }),
			}),
		onSuccess: data => {
			console.log(data);

			navigate({ to: '/' });
		},
		onError: error => {
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

			console.log(error);

			// navigate({ to: '/user' });
		},
		retry: false,
	});
};
