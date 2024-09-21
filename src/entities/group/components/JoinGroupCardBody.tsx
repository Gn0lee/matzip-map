import { Stack, Button, Spinner, Center, CardBody } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { groupMembershipOptions } from 'src/entities/group/queries/group';
import { Route } from 'src/routes/group/join.$groupId';

export default function JoinGroupCardBody() {
	const { groupId } = Route.useParams();

	const { data } = useQuery(groupMembershipOptions({ group_id: groupId }));

	if (data === undefined) {
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
			<Stack>
				<Button>모임에 함께하기</Button>
			</Stack>
		</CardBody>
	);
}
