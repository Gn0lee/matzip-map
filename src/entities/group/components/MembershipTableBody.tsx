import { useQuery } from '@tanstack/react-query';
import { Center, Spinner, Td, Text, Tr } from '@chakra-ui/react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { membershipOptions } from 'src/entities/group/queries/group';
import { MEMBERSHIP_ROLE_TEXT } from 'src/entities/group/lib/constants';

export default function MembershipTableBody() {
	const { data, isError } = useQuery(membershipOptions);

	if (isError) {
		return (
			<Tr>
				<Td colSpan={3}>
					<Center minHeight="200px">
						<Text fontSize="2xl" fontWeight={500}>
							조회에 실패하였습니다.
						</Text>
					</Center>
				</Td>
			</Tr>
		);
	}

	if (data === undefined) {
		return (
			<Tr>
				<Td colSpan={3}>
					<Center minHeight="200px">
						<Spinner size="xl" />
					</Center>
				</Td>
			</Tr>
		);
	}

	if (data.length === 0) {
		return (
			<Tr>
				<Td colSpan={3}>
					<Center minHeight="200px">
						<Text fontSize="2xl" fontWeight={500}>
							가입한 모임이 없습니다.
						</Text>
					</Center>
				</Td>
			</Tr>
		);
	}

	return data.map(membership => (
		<Tr key={membership.id}>
			<Td>
				<Text noOfLines={1}>{membership.group_name}</Text>
			</Td>
			<Td>{MEMBERSHIP_ROLE_TEXT[membership.role]}</Td>
			<Td>{format(new Date(membership.joined_at), 'PPP (EEE)', { locale: ko })}</Td>
		</Tr>
	));
}
