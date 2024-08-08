import { selectedSearchResultAtom, isMapCenterChangedAtom } from 'src/entities/root/store/atom';
import { Modal, ModalContent, ModalBody, ModalHeader, Button, ModalFooter, ModalCloseButton } from '@chakra-ui/react';
import { useAtom } from 'jotai';

export default function SearchMarkerModal() {
	const [selectedSearchResult, setSelectedSearchResult] = useAtom(selectedSearchResultAtom);

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
					<p>ID: {selectedSearchResult.id}</p>
					<a href={selectedSearchResult.place_url}>{selectedSearchResult.place_url}</a>
				</ModalBody>
				<ModalFooter>
					<Button onClick={handleModalClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
