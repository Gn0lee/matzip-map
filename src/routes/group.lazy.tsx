import { createLazyFileRoute } from '@tanstack/react-router';

import PageLayout from 'src/shared/ui/PageLayout';
import MembershipList from 'src/entities/group/components/MembershipList';

export const Route = createLazyFileRoute('/group')({
	component: Group,
});

function Group() {
	return (
		<PageLayout heading="모임">
			<MembershipList />
		</PageLayout>
	);
}
