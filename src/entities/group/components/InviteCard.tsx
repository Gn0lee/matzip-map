import { Card, CardHeader, CardBody, Stack, Button, Heading, Text, useToast } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

import { Route } from 'src/routes/group.$groupId.lazy';

export default function InviteCard() {
	const {
		data: { group_name, group_id },
	} = Route.useLoaderData();

	const toast = useToast();

	const handleClickCopy = async () => {
		try {
			await navigator.clipboard.writeText(`${window.location.origin}/group/invite/${group_id}`);

			toast({
				title: '링크 복사 완료',
				description: '링크가 복사되었습니다.',
				status: 'success',
				duration: 2000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: '링크 복사 실패',
				description: '링크 복사에 실패했습니다.',
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
					<Text>아래 링크를 공유하여 {group_name}에 친구들을 초대하세요.</Text>
					<Button leftIcon={<CopyIcon />} onClick={handleClickCopy}>
						링크 복사
					</Button>
				</Stack>
			</CardBody>
		</Card>
	);
}
