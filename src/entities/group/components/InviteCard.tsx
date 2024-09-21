import { Card, CardHeader, CardBody, Stack, Button, Heading, Text, useToast, Center, Spinner } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

import { Route } from 'src/routes/group/detail.$groupId';
import { useQuery } from '@tanstack/react-query';
import { groupMembershipOptions } from 'src/entities/group/queries/group';

export default function InviteCard() {
	const toast = useToast();

	const { groupId } = Route.useParams();

	const { data } = useQuery(groupMembershipOptions({ group_id: groupId }));

	if (data === undefined) {
		return (
			<Card>
				<CardHeader>
					<Heading as="h4" size="md">
						초대하기
					</Heading>
				</CardHeader>
				<CardBody>
					<Center>
						<Spinner size="xl" />
					</Center>
				</CardBody>
			</Card>
		);
	}

	const handleClickCopy = async () => {
		try {
			await navigator.clipboard.writeText(`${window.location.origin}/group/join/${data.group_id}`);

			toast({
				title: '링크 복사 완료',
				status: 'success',
				duration: 2000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: '링크 복사 실패',
				status: 'error',
				duration: 2000,
				isClosable: true,
			});

			console.error(error);
		}
	};

	return (
		<Card>
			<CardHeader>
				<Heading as="h4" size="md">
					초대하기
				</Heading>
			</CardHeader>
			<CardBody>
				<Stack spacing={6}>
					<Text>
						아래 링크를 공유하여 <Text as="b">{data.group_name}</Text> 모임에 친구들을 초대하세요!
					</Text>
					<Button leftIcon={<CopyIcon />} onClick={handleClickCopy}>
						링크 복사
					</Button>
				</Stack>
			</CardBody>
		</Card>
	);
}
