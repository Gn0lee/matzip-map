import { createLazyFileRoute } from '@tanstack/react-router';
import { ErrorBoundary } from 'react-error-boundary';

import PageLayout from 'src/shared/ui/PageLayout';
import LoginCard from 'src/entities/user/ui/LoginCard';
import UserInfoCard from 'src/entities/user/ui/UserInfoCard';

export const Route = createLazyFileRoute('/user')({
	component: User,
});

function User() {
	return (
		<PageLayout heading="내 정보">
			<ErrorBoundary fallback={<LoginCard />}>
				<UserInfoCard />
			</ErrorBoundary>
		</PageLayout>
	);
}
