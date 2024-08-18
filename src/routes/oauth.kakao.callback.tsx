import { createFileRoute } from '@tanstack/react-router';
import { Center, Spinner } from '@chakra-ui/react';

import { useKakaoOauthCallback } from 'src/entities/user/hooks/oauth';

export const Route = createFileRoute('/oauth/kakao/callback')({
	component: OauthKakaoCallback,
	validateSearch: (search: Record<string, unknown>): { code: string } => {
		return {
			code: (search?.code as string) || '',
		};
	},
});

function OauthKakaoCallback() {
	useKakaoOauthCallback();

	return (
		<Center width="100%" height="100%">
			<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
		</Center>
	);
}
