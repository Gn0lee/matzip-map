import { createLazyFileRoute } from '@tanstack/react-router';
import { Stack } from '@chakra-ui/react';

import PageLayout from 'src/shared/ui/PageLayout';
import MembershipTable from 'src/entities/group/components/MembershipTable';
import MembershipFormCard from 'src/entities/group/components/MembershipFormCard';

export const Route = createLazyFileRoute('/group/')({
	component: Group,
});

function Group() {
	return (
		<PageLayout heading="모임">
			<Stack spacing={[5, 10]}>
				<MembershipFormCard />
				<MembershipTable />
			</Stack>
		</PageLayout>
	);
}
