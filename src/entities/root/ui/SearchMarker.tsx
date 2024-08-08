import { MapMarker, useMap } from 'react-kakao-maps-sdk';
import { useSetAtom } from 'jotai';
import { selectedSearchResultAtom, isMapCenterChangedAtom } from 'src/entities/root/store/atom';

export default function SearchMarker(result: kakao.maps.services.PlacesSearchResultItem) {
	const map = useMap();

	const setSelectedSearchResult = useSetAtom(selectedSearchResultAtom);

	const setIsMapCenterChanged = useSetAtom(isMapCenterChangedAtom);

	const handleClickMarker = (marker: kakao.maps.Marker) => {
		const position = marker.getPosition();

		setSelectedSearchResult(result);

		const roundedMapCenter = new kakao.maps.LatLng(
			Number(map.getCenter().getLat().toFixed(2)),
			Number(map.getCenter().getLng().toFixed(2)),
		);

		const roundedPosition = new kakao.maps.LatLng(
			Number(position.getLat().toFixed(2)),
			Number(position.getLng().toFixed(2)),
		);

		if (roundedMapCenter.equals(roundedPosition)) {
			setIsMapCenterChanged(true);
		}

		map.panTo(position);
	};

	return (
		<MapMarker position={{ lat: Number(result.y), lng: Number(result.x) }} onClick={handleClickMarker} clickable />
	);
}
