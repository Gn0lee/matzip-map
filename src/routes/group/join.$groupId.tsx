import { createFileRoute } from '@tanstack/react-router';
import PageLayout from 'src/shared/ui/PageLayout';
import { Stack } from '@chakra-ui/react';
import { matzipApiInstance } from 'src/shared/lib/ky';
import { ApiData } from 'src/entities/home/types/api';
import { GroupData } from 'src/entities/group/types/group';
import JoinGroupCard from 'src/entities/group/components/JoinGroupCard';

export const Route = createFileRoute('/group/join/$groupId')({
	component: JoinGroup,
	loader: ({ params: { groupId } }) => matzipApiInstance.get(`group/${groupId}`).json<ApiData<GroupData>>(),
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
