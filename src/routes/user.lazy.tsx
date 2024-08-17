import { createLazyFileRoute } from '@tanstack/react-router';

import PageLayout from 'src/shared/ui/PageLayout';
import LoginCard from 'src/entities/user/ui/LoginCard';

export const Route = createLazyFileRoute('/user')({
	component: User,
});

function User() {
	return (
		<PageLayout heading="계정 정보">
			<LoginCard />
		</PageLayout>
	);
}
