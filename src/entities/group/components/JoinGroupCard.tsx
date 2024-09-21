import { ErrorBoundary } from 'react-error-boundary';
import { Card, CardHeader, Heading, Text } from '@chakra-ui/react';
import { HTTPError } from 'ky';

import JoinGroupCardBody from 'src/entities/group/components/JoinGroupCardBody';
import LoginToJoinGroup from 'src/entities/group/components/LoginToJoinGroup';

export default function JoinGroupCard() {
	return (
		<Card>
			<CardHeader>
				<Heading as="h4" size="md">
					모임에 함께하기
				</Heading>
			</CardHeader>
			<ErrorBoundary
				FallbackComponent={({ error }) => {
					if (error instanceof HTTPError && error.response.status === 401) {
						return <LoginToJoinGroup />;
					}

					return <Text>모임 정보를 불러오는 중 오류가 발생했습니다: {error.message}</Text>;
				}}
			>
				<JoinGroupCardBody />
			</ErrorBoundary>
		</Card>
	);
}
