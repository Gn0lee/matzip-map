import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { useAtomValue, useSetAtom } from 'jotai';
import { markerListAtom, searchValueAtom } from 'src/entities/root/store/atom.ts';
import { setSearchValueAtom } from 'src/entities/root/store/action.ts';
import { ChangeEventHandler, FormEventHandler } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

export default function TopSearchBar() {
	const searchValue = useAtomValue(searchValueAtom);

	const map = useMap();

	const setSearchValue = useSetAtom(setSearchValueAtom);

	const setMarkerList = useSetAtom(markerListAtom);

	const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
		setSearchValue(event.target.value);
	};

	const handleSubmitSearch: FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault();

		const places = new kakao.maps.services.Places(map);

		places.keywordSearch(
			searchValue,
			(result, status) => {
				if (status === kakao.maps.services.Status.OK) {
					setMarkerList(result);
				}
			},
			{ useMapBounds: true, useMapCenter: true, category_group_code: 'FD6' },
		);
	};

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
			<form onSubmit={handleSubmitSearch}>
				<Flex gap="2">
					<Input placeholder="식당을 검색하세요" value={searchValue} onChange={handleChange} />
					<Button colorScheme="blue" type="submit">
						검색
					</Button>
				</Flex>
			</form>
		</Box>
	);
}
