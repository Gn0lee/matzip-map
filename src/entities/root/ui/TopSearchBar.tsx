import { Box, Flex, Input, Button } from '@chakra-ui/react';

export default function TopSearchBar() {
	return (
		<Box
			bg="gray.50"
			p={[2, 3]}
			position="absolute"
			top="16px"
			left="16px"
			zIndex="2"
			maxWidth="300px"
			width="calc(100% - 32px)"
			borderRadius="md"
		>
			<Flex gap="2">
				<Input placeholder="식당을 검색하세요" />
				<Button colorScheme="blue">검색</Button>
			</Flex>
		</Box>
	);
}
