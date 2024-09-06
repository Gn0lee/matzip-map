import { useQuery } from '@tanstack/react-query';
import { Center, Spinner, Td, Text, Tr } from '@chakra-ui/react';

import { membershipOptions } from 'src/entities/group/queries/group';

export default function MembershipTableBody() {
	const { data, isError } = useQuery(membershipOptions);

	if (isError) {
		return (
			<Tr>
				<Td colSpan={4}>
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
				<Td colSpan={4}>
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
				<Td colSpan={4}>
					<Center minHeight="200px">
						<Text fontSize="2xl" fontWeight={500}>
							가입한 모임이 없습니다.
						</Text>
					</Center>
				</Td>
			</Tr>
		);
	}

	return data.map((membership, index) => (
		<Tr key={membership.id}>
			<Td>{index + 1}</Td>
			<Td>{membership.group_name}</Td>
			<Td>{membership.role}</Td>
			<Td>{membership.joined_at}</Td>
		</Tr>
	));
}
