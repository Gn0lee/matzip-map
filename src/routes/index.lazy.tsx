import { createLazyFileRoute } from '@tanstack/react-router';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import { useSetAtom } from 'jotai';

import Geolocation from 'src/entities/home/hooks/geolocation';
import TopSearchBar from 'src/entities/home/ui/TopSearchBar';
import SearchMarkerList from 'src/entities/home/ui/SearchMarkerList';
import { isMapCenterChangedAtom } from 'src/entities/home/store/atom';
import SearchMarkerModal from 'src/entities/home/ui/SearchMarkerModal';
import NavigationMenu from 'src/shared/ui/NavigationMenu';

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
			<NavigationMenu
				menuButtonProps={{ position: 'absolute', top: '16px', right: '16px', zIndex: 2, backgroundColor: 'gray.50' }}
			/>
		</Map>
	);
}
