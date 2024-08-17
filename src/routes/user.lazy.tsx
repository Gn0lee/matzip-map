import { createLazyFileRoute } from '@tanstack/react-router';
import PageLayout from 'src/shared/ui/PageLayout';

export const Route = createLazyFileRoute('/user')({
	component: User,
});

function User() {
	return (
		<PageLayout heading="계정 정보">
			<h1>User</h1>
		</PageLayout>
	);
}
