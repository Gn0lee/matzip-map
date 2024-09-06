import { Table, Thead, Tbody, Tr, Th, TableContainer, Card, CardHeader, CardBody, Heading } from '@chakra-ui/react';

import MembershipTableBody from 'src/entities/group/components/MembershipTableBody';

export default function MembershipTable() {
	return (
		<Card>
			<CardHeader>
				<Heading as="h4" size="md">
					모임 목록
				</Heading>
			</CardHeader>
			<CardBody>
				<TableContainer>
					<Table>
						<Thead>
							<Tr>
								<Th>번호</Th>
								<Th>이름</Th>
								<Th>역할</Th>
								<Th>가입일</Th>
							</Tr>
						</Thead>
						<Tbody>
							<MembershipTableBody />
						</Tbody>
					</Table>
				</TableContainer>
			</CardBody>
		</Card>
	);
}
