import { selectedSearchResultAtom, isMapCenterChangedAtom } from 'src/entities/home/store/atom';
import {
	Modal,
	ModalContent,
	ModalBody,
	ModalHeader,
	Button,
	ModalFooter,
	ModalCloseButton,
	Image,
	Stack,
	Link,
	Skeleton,
	ListItem,
	ListIcon,
	List,
	Card,
	CardBody,
	CardHeader,
	Heading,
	ModalOverlay,
	useBreakpointValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon, StarIcon } from '@chakra-ui/icons';
import { useAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import { placeInfoQueryOptions } from 'src/entities/home/queries/place';
import { useState } from 'react';
import { PhoneIcon, QuestionIcon } from '@chakra-ui/icons';

export default function SearchMarkerModal() {
	const [selectedSearchResult, setSelectedSearchResult] = useAtom(selectedSearchResultAtom);

	const modalSize = useBreakpointValue(
		{ base: 'full', sm: 'lg', md: 'xl', lg: 'xl', xl: 'xl', '2xl': 'xl' },
		{ ssr: false, fallback: 'full' },
	);

	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const { data: placeInfo, isSuccess } = useQuery(placeInfoQueryOptions({ id: selectedSearchResult?.id }));

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
			size={modalSize}
			motionPreset="slideInBottom"
			scrollBehavior="inside"
			isCentered
		>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalHeader>{selectedSearchResult.place_name}</ModalHeader>
				<ModalBody>
					<Stack direction="column" spacing={4}>
						<Skeleton isLoaded={isSuccess && isImageLoaded} width="100%" aspectRatio={2} borderRadius={8}>
							<Image
								src={placeInfo?.main_photo_url}
								aspectRatio={2}
								width="100%"
								borderRadius={8}
								onLoad={() => setIsImageLoaded(true)}
								alt={selectedSearchResult.place_name}
								objectFit="cover"
							/>
						</Skeleton>
						<Card>
							<CardHeader>
								<Heading size="md">카카오맵 정보</Heading>
							</CardHeader>
							<CardBody>
								<List>
									<ListItem>
										<ListIcon as={ExternalLinkIcon} color="green.500" />
										<Link isExternal href={selectedSearchResult.place_url}>
											카카오 맵으로 바로가기
										</Link>
									</ListItem>
									<ListItem>
										<ListIcon as={StarIcon} color="green.500" />
										<Skeleton isLoaded={isSuccess} borderRadius={4} display="inline-list-item" lineHeight="1">
											평점: {placeInfo?.score} ({placeInfo?.score_count})
										</Skeleton>
									</ListItem>
								</List>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<Heading size="md">가게 정보</Heading>
							</CardHeader>
							<CardBody>
								<List spacing={3}>
									<ListItem>
										<ListIcon as={QuestionIcon} color="green.500" />
										주소: {selectedSearchResult.road_address_name}
									</ListItem>
									<ListItem>
										<ListIcon as={PhoneIcon} color="green.500" />
										전화번호: {selectedSearchResult.phone}
									</ListItem>
								</List>
							</CardBody>
						</Card>
					</Stack>
				</ModalBody>
				<ModalFooter>
					<Button onClick={handleModalClose}>닫기</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
