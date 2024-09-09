import { createLazyFileRoute } from '@tanstack/react-router';
import { Stack } from '@chakra-ui/react';

import PageLayout from 'src/shared/ui/PageLayout';

export const Route = createLazyFileRoute('/group/$groupId')({
	component: GroupDetail,
});

function GroupDetail() {
	return (
		<PageLayout heading="모임 정보">
			<Stack spacing={[5, 10]}></Stack>
		</PageLayout>
	);
}
