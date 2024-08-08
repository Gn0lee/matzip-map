import { createLazyFileRoute } from '@tanstack/react-router';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';

import TopSearchBar from 'src/entities/root/ui/TopSearchBar.tsx';
import SearchMarkerList from 'src/entities/root/ui/SearchMarkerList.tsx';

export const Route = createLazyFileRoute('/')({
	component: Index,
});

function Index() {
	useKakaoLoader({
		appkey: import.meta.env.VITE_KAKAO_APP_KEY,
		libraries: ['services'],
	});

	return (
		<>
			<Map center={{ lat: 37.5665, lng: 126.978 }} style={{ width: '100%', height: '100%' }} isPanto level={4}>
				<TopSearchBar />
				<SearchMarkerList />
			</Map>
		</>
	);
}
