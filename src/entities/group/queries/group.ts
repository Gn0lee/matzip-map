import { queryOptions } from '@tanstack/react-query';

import { matzipApiInstance } from 'src/shared/lib/ky';
import { ApiData } from 'src/entities/home/types/api';
import { MembershipData } from 'src/entities/group/types/group';

export const membershipOptions = queryOptions({
	queryKey: [`membershipList`],
	queryFn: () => matzipApiInstance.get('group/list').json<ApiData<MembershipData[]>>(),
	select: data => data.data,
});
