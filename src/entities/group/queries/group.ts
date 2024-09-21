import { queryOptions } from '@tanstack/react-query';

import { matzipApiInstance } from 'src/shared/lib/ky';
import { ApiData } from 'src/entities/home/types/api';
import { MembershipData, GroupData } from 'src/entities/group/types/group';

export const membershipOptions = queryOptions({
	queryKey: [`membershipList`],
	queryFn: () => matzipApiInstance.get('group/list').json<ApiData<MembershipData[]>>(),
	select: data => data.data,
});

export const groupMembershipOptions = ({ group_id }: Pick<MembershipData, 'group_id'>) =>
	queryOptions({
		queryKey: [`groupMembershipList`, group_id],
		queryFn: () => matzipApiInstance.get(`group/membership/${group_id}`).json<ApiData<MembershipData>>(),
		select: data => data.data,
		throwOnError: true,
	});

export const groupOptions = ({ id }: Pick<GroupData, 'id'>) =>
	queryOptions({
		queryKey: [`group`, id],
		queryFn: () => matzipApiInstance.get(`group/${id}`).json<ApiData<GroupData>>(),
		select: data => data.data,
		throwOnError: true,
	});
