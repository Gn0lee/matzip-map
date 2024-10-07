import { Button, Stack, Text, CardBody, Center, Spinner } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import KakaoIcon from 'src/entities/user/ui/KakaoIcon';
import supabase from 'src/entities/user/lib/auth';
import { groupOptions } from 'src/entities/group/queries/group';
import { Route } from 'src/routes/group/join.$groupId';

export default function LoginToJoinGroup() {
	const { groupId } = Route.useParams();
	const { data: group } = useQuery(groupOptions({ id: groupId }));

	const handleClickKakaoLogin = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'kakao',
			options: {
				redirectTo: import.meta.env.VITE_KAKAO_CALLBACK_URL,
				queryParams: {
					group_id: groupId,
				},
			},
		});
	};

	if (!group) {
		return (
			<CardBody>
				<Center>
					<Spinner size="xl" />
				</Center>
			</CardBody>
		);
	}

	return (
		<CardBody>
			<Stack spacing={5}>
				<Text>
					<Text as="b">{group.name}</Text> 모임에 참여하기위해 로그인하세요!
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
		</CardBody>
	);
}
