import { useAtomValue } from 'jotai';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';
import { markerListAtom } from 'src/entities/root/store/atom';

export default function SearchMarkerList() {
	const markerList = useAtomValue(markerListAtom);

	const map = useMap();

	const handleClickMarker = (marker: kakao.maps.Marker) => {
		const position = marker.getPosition();

		map.setCenter(position);
	};

	return (
		<>
			{markerList.map(marker => (
				<MapMarker
					key={marker.id}
					position={{ lat: Number(marker.y), lng: Number(marker.x) }}
					onClick={handleClickMarker}
					clickable
				/>
			))}
		</>
	);
}
