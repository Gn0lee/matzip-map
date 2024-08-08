import { createLazyFileRoute } from '@tanstack/react-router';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import Geolocation from 'src/entities/root/hooks/geolocation';

import TopSearchBar from 'src/entities/root/ui/TopSearchBar';
import SearchMarkerList from 'src/entities/root/ui/SearchMarkerList';
import { useSetAtom } from 'jotai';
import { isMapCenterChangedAtom } from 'src/entities/root/store/atom';

import SearchMarkerModal from 'src/entities/root/ui/SearchMarkerModal';

export const Route = createLazyFileRoute('/')({
	component: Index,
});

function Index() {
	useKakaoLoader({
		appkey: import.meta.env.VITE_KAKAO_APP_KEY,
		libraries: ['services'],
	});

	const setIsMapCenterChanged = useSetAtom(isMapCenterChangedAtom);

	const handleCenterChangeEnd = () => {
		setIsMapCenterChanged(true);
	};

	return (
		<>
			<Map
				center={{ lat: 37.5665, lng: 126.978 }}
				style={{ width: '100%', height: '100%' }}
				isPanto
				level={4}
				onCenterChanged={handleCenterChangeEnd}
			>
				<TopSearchBar />
				<SearchMarkerList />
				<Geolocation />
				<SearchMarkerModal />
			</Map>
		</>
	);
}
