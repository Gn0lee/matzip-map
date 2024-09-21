import { createFileRoute } from '@tanstack/react-router';
import { Stack } from '@chakra-ui/react';

import PageLayout from 'src/shared/ui/PageLayout';
import InviteCard from 'src/entities/group/components/InviteCard';

export const Route = createFileRoute('/group/detail/$groupId')({
	component: GroupDetail,
});

function GroupDetail() {
	return (
		<PageLayout heading="모임 정보">
			<Stack spacing={[5, 10]}>
				<InviteCard />
			</Stack>
		</PageLayout>
	);
}
