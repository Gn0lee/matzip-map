import { Card, CardBody, CardHeader, Button, Heading, Stack } from '@chakra-ui/react';

import KakaoIcon from 'src/entities/user/ui/KakaoIcon';
import supabase from 'src/entities/user/lib/auth';

export default function LoginCard() {
	const handleClickKakaoLogin = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'kakao',
			options: {
				redirectTo: import.meta.env.VITE_KAKAO_CALLBACK_URL,
			},
		});
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
						onClick={handleClickKakaoLogin}
					>
						카카오 로그인
					</Button>
				</Stack>
			</CardBody>
		</Card>
	);
}
