import { Center, Stack, Grid, GridItem, Flex, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';
import NavigationMenu from 'src/shared/ui/NavigationMenu';

interface PageLayoutProps {
	children?: ReactNode;
	heading?: string;
}

export default function PageLayout({ children, heading }: PageLayoutProps) {
	return (
		<Grid
			templateAreas={`
      "header"
      "main"
    `}
			templateColumns="1fr"
			templateRows="64px 1fr"
			height="100%"
			width="100%"
		>
			<GridItem area="header">
				<Center width="100%" height="100%">
					<Flex justifyContent="space-between" alignItems="center" width={['100%', '450px']} height="100%" p={[2, 3]}>
						<Heading as="h3" fontSize={['xl', '2xl']}>
							{heading}
						</Heading>
						<NavigationMenu />
					</Flex>
				</Center>
			</GridItem>
			<GridItem area="main">
				<Center width="100%" height="100%">
					<Stack width={['100%', '450px']} p={[2, 3]} spacing={4} height="100%" overflow="auto">
						{children}
					</Stack>
				</Center>
			</GridItem>
		</Grid>
	);
}
