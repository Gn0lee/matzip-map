import { queryOptions } from '@tanstack/react-query';
import { matzipApiInstance } from 'src/shared/lib/ky';
import { type ApiData } from 'src/entities/home/types/api';
import { PlaceInfo } from 'src/entities/home/types/place';

export const placeInfoQueryOptions = ({ id }: Partial<Pick<kakao.maps.services.PlacesSearchResultItem, 'id'>>) =>
	queryOptions({
		queryKey: ['placeInfo', id],
		enabled: !!id,
		queryFn: async () => matzipApiInstance.get(`place-info/${id}`).json<ApiData<PlaceInfo>>(),
		select: data => data.data,
		retry: 1,
		staleTime: 1000 * 60 * 60,
	});
