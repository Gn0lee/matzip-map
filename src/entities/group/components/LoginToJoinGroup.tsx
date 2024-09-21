import { Button, Stack, Text } from '@chakra-ui/react';

import KakaoIcon from 'src/entities/user/ui/KakaoIcon';
import supabase from 'src/entities/user/lib/auth';
import { Route } from 'src/routes/group.join.$groupId';

export default function LoginToJoinGroup() {
	const {
		data: { name, id },
	} = Route.useLoaderData();

	const handleClickKakaoLogin = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'kakao',
			options: {
				redirectTo: import.meta.env.VITE_KAKAO_CALLBACK_URL,
				queryParams: {
					group_id: id,
				},
			},
		});
	};

	return (
		<Stack spacing={3}>
			<Text>
				<Text as="b">{name}</Text> 모임에 참여하기위해 로그인하세요!
			</Text>
			<Button
				backgroundColor="#fae500"
				leftIcon={<KakaoIcon />}
				_hover={{ backgroundColor: '#e6cf00' }}
				onClick={handleClickKakaoLogin}
			>
				카카오 로그인
			</Button>
		</Stack>
	);
}
