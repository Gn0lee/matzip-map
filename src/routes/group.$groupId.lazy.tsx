import { createFileRoute } from '@tanstack/react-router';
import { Stack } from '@chakra-ui/react';

import PageLayout from 'src/shared/ui/PageLayout';
import InviteCard from 'src/entities/group/components/InviteCard';
import { matzipApiInstance } from 'src/shared/lib/ky';
import { type MembershipData } from 'src/entities/group/types/group';
import { type ApiData } from 'src/entities/home/types/api';

export const Route = createFileRoute('/group/$groupId')({
	component: GroupDetail,
	loader: ({ params: { groupId } }) =>
		matzipApiInstance.get(`group/membership/${groupId}`).json<ApiData<MembershipData>>(),
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
