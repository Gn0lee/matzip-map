import { createFileRoute } from '@tanstack/react-router';
import PageLayout from 'src/shared/ui/PageLayout';
import { Stack } from '@chakra-ui/react';
import JoinGroupCard from 'src/entities/group/components/JoinGroupCard';

export const Route = createFileRoute('/group/join/$groupId')({
	component: JoinGroup,
});

function JoinGroup() {
	return (
		<PageLayout heading="모임 가입">
			<Stack spacing={[5, 10]}>
				<JoinGroupCard />
			</Stack>
		</PageLayout>
	);
}
