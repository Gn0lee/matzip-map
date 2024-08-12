import { queryOptions } from '@tanstack/react-query';
import supabaseInstance from 'src/shared/ky/supabaseInstance';
import { type ApiData } from 'src/entities/root/types/api';
import { PlaceInfo } from 'src/entities/root/types/place';

export const placeInfoQueryOptions = ({ id }: Partial<Pick<kakao.maps.services.PlacesSearchResultItem, 'id'>>) =>
	queryOptions({
		queryKey: ['placeInfo', id],
		enabled: !!id,
		queryFn: async () => supabaseInstance.get(`/place/${id}`).json<ApiData<PlaceInfo>>(),
		select: data => data.data,
	});
