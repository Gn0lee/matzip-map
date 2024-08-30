import { useMutation } from '@tanstack/react-query';
import { matzipApiInstance } from 'src/shared/lib/ky';
import { useNavigate } from '@tanstack/react-router';
import { useToast } from '@chakra-ui/react';

const FAIL_TOAST_ID = 'fail-toast';

export const usePostOauthKakaoCallback = () => {
	const navigate = useNavigate();

	const toast = useToast();

	return useMutation({
		mutationFn: (code: string) =>
			matzipApiInstance
				.get('oauth/kakao/callback', {
					searchParams: { code },
				})
				.json<{ message: string }>(),
		onSuccess: () => {
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
