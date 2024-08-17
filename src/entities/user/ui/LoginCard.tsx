import { Card, CardBody, CardHeader, Button, Heading, Stack } from '@chakra-ui/react';
import KakaoIcon from 'src/entities/user/ui/KakaoIcon';

export default function LoginCard() {
	return (
		<Card>
			<CardHeader>
				<Heading size="md">로그인</Heading>
			</CardHeader>
			<CardBody>
				<Stack spacing={3}>
					<Button backgroundColor="#fae500" leftIcon={<KakaoIcon />} _hover={{ backgroundColor: '#e6cf00' }}>
						카카오 로그인
					</Button>
				</Stack>
			</CardBody>
		</Card>
	);
}
