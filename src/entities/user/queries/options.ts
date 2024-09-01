import { queryOptions } from '@tanstack/react-query';

import { matzipApiInstance } from 'src/shared/lib/ky';
import { User } from 'src/entities/user/types/user';
import { ApiData } from 'src/entities/home/types/api';

export const userQueryOptions = queryOptions({
	queryKey: ['user'],
	queryFn: () => matzipApiInstance.get('user/info').json<ApiData<User>>(),
	retry: false,
	select: data => data.data,
	throwOnError: true,
});
