import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

const theme = extendTheme({
	config: { useSystemColorMode: true },
	styles: {
		global: {
			'html, body': {
				width: '100%',
				height: '100%',
				backgroundColor: 'gray.50',
			},
			'#app': {
				width: '100%',
				height: '100%',
				position: 'relative',
			},
		},
	},
});

export const Route = createRootRoute({
	component: () => (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<Outlet />
				<TanStackRouterDevtools />
			</ChakraProvider>
		</QueryClientProvider>
	),
});
