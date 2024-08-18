import { Card, CardBody, CardHeader, Button, Heading, Stack } from '@chakra-ui/react';

import KakaoIcon from 'src/entities/user/ui/KakaoIcon';
import { useKakaoSDK } from 'src/entities/user/hooks/script';

export default function LoginCard() {
	const { isLoaded } = useKakaoSDK(import.meta.env.VITE_KAKAO_APP_KEY);

	const handleClickKakaoLogin = () => {
		if (window?.Kakao?.Auth) {
			window?.Kakao.Auth.authorize({
				redirectUri: import.meta.env.VITE_KAKAO_CALLBACK_URL,
			});
		}
	};

	return (
		<Card>
			<CardHeader>
				<Heading size="md">로그인</Heading>
			</CardHeader>
			<CardBody>
				<Stack spacing={3}>
					<Button
						backgroundColor="#fae500"
						leftIcon={<KakaoIcon />}
						_hover={{ backgroundColor: '#e6cf00' }}
						disabled={!isLoaded}
						onClick={handleClickKakaoLogin}
					>
						카카오 로그인
					</Button>
				</Stack>
			</CardBody>
		</Card>
	);
}
