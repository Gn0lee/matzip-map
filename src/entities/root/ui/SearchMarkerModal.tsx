import { selectedSearchResultAtom, isMapCenterChangedAtom } from 'src/entities/root/store/atom';
import {
	Modal,
	ModalContent,
	ModalBody,
	ModalHeader,
	Button,
	ModalFooter,
	ModalCloseButton,
	Spinner,
	Image,
	Stack,
	Link,
	Text,
	Box,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { placeInfoQueryOptions } from 'src/entities/root/queries/place';

export default function SearchMarkerModal() {
	const [selectedSearchResult, setSelectedSearchResult] = useAtom(selectedSearchResultAtom);

	const { data: placeInfo } = useQuery(placeInfoQueryOptions({ id: selectedSearchResult?.id }));

	const [isMapCenterChanged, setIsMapCenterChanged] = useAtom(isMapCenterChangedAtom);

	if (selectedSearchResult === undefined) {
		return null;
	}

	const handleModalClose = () => {
		setIsMapCenterChanged(false);
		setSelectedSearchResult(undefined);
	};

	return (
		<Modal
			isOpen={isMapCenterChanged && !!selectedSearchResult}
			onClose={handleModalClose}
			size="xl"
			motionPreset="slideInBottom"
		>
			<ModalContent>
				<ModalCloseButton />
				<ModalHeader>{selectedSearchResult.place_name}</ModalHeader>
				<ModalBody>
					{placeInfo === undefined ? (
						<Box display="flex" justifyContent="center">
							<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
						</Box>
					) : null}
					{placeInfo ? (
						<Stack direction="column">
							<Image src={placeInfo.main_photo_url} />
							<Link isExternal href={selectedSearchResult.place_url}>
								카카오 지도로 바로가기 <ExternalLinkIcon mx="2px" />
							</Link>
							<Text>
								카카오 맵 평점: {placeInfo.score} ({placeInfo.score_count})
							</Text>
						</Stack>
					) : null}
				</ModalBody>
				<ModalFooter>
					<Button onClick={handleModalClose}>닫기</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
