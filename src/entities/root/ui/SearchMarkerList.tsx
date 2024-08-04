import { useAtomValue } from 'jotai';
import { MapMarker } from 'react-kakao-maps-sdk';
import { markerListAtom } from 'src/entities/root/store/atom';

export default function SearchMarkerList() {
	const markerList = useAtomValue(markerListAtom);

	return (
		<>
			{markerList.map(marker => (
				<MapMarker key={marker.id} position={{ lat: Number(marker.y), lng: Number(marker.x) }} />
			))}
		</>
	);
}
