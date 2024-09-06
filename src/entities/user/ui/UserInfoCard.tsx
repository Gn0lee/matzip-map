import { useQuery } from '@tanstack/react-query';
import {
	Card,
	CardBody,
	CardHeader,
	Button,
	Heading,
	Stack,
	Skeleton,
	Text,
	Flex,
	Avatar,
	Icon,
} from '@chakra-ui/react';
import { LogOut } from 'lucide-react';

import { userQueryOptions } from 'src/entities/user/queries/options';
import { useLogout } from 'src/entities/user/hooks/mutation';

export default function UserInfoCard() {
	const { data: userInfo } = useQuery(userQueryOptions);

	const { mutate } = useLogout();

	const handleClickLogout = () => {
		mutate();
	};

	return (
		<Card>
			<CardHeader>
				<Flex justifyContent="space-between" alignItems="center">
					<Heading size="md" as="h4">
						계정
					</Heading>
					<Button size={['xs', 'sm']} variant="outline" leftIcon={<Icon as={LogOut} />} onClick={handleClickLogout}>
						로그아웃
					</Button>
				</Flex>
			</CardHeader>
			<CardBody>
				<Stack spacing={8}>
					<Flex gap={4} alignItems="center">
						{userInfo === undefined ? (
							<Skeleton height={12} width={12} borderRadius="full" />
						) : (
							<Avatar src={userInfo?.avatar_url} name={userInfo?.name || userInfo?.email} />
						)}
						{userInfo === undefined ? (
							<Skeleton />
						) : (
							<Text fontSize={[18, 24]} fontWeight={[500, 600]}>
								안녕하세요! {userInfo.name}님
							</Text>
						)}
					</Flex>
					{userInfo === undefined ? <Skeleton /> : <Text>이메일: {userInfo?.email}</Text>}
				</Stack>
			</CardBody>
		</Card>
	);
}
