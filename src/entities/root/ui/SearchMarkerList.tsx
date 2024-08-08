import { useAtomValue } from 'jotai';

import { markerListAtom } from 'src/entities/root/store/atom';
import SearchMarker from 'src/entities/root/ui/SearchMarker';

export default function SearchMarkerList() {
	const markerList = useAtomValue(markerListAtom);

	return (
		<>
			{markerList.map(marker => (
				<SearchMarker key={marker.id} {...marker} />
			))}
		</>
	);
}
