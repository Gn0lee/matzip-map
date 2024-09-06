import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';

import { matzipApiInstance } from 'src/shared/lib/ky';
import { GroupData } from 'src/entities/group/types/group';
import { membershipOptions } from 'src/entities/group/queries/group';

export const useCreateGroup = () => {
	const queryClient = useQueryClient();

	const toast = useToast();

	return useMutation({
		mutationFn: (data: Pick<GroupData, 'name' | 'description'>) =>
			matzipApiInstance.post('group', { json: data }).json(),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: membershipOptions.queryKey });
			toast({
				title: '모임이 생성되었습니다.',
				status: 'success',
				duration: 5000,
				isClosable: true,
			});
		},
		onError: () => {
			toast({
				title: '모임 생성에 실패했습니다.',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		},
	});
};
