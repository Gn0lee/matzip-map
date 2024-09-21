import { ErrorBoundary } from 'react-error-boundary';
import { Card, CardHeader, CardBody, Stack, Button, Heading, Text, useToast } from '@chakra-ui/react';
import JoinGroupCardBody from 'src/entities/group/components/JoinGroupCardBody';

export default function JoinGroupCard() {
	return (
		<Card>
			<CardHeader>
				<Heading as="h4" size="md">
					모임에 함께하기
				</Heading>
			</CardHeader>

			<ErrorBoundary
				FallbackComponent={({ error }) => <Text>모임 정보를 불러오는 중 오류가 발생했습니다: {error.message}</Text>}
			>
				<JoinGroupCardBody />
			</ErrorBoundary>
		</Card>
	);
}
