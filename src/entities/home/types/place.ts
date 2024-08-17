export interface PlaceInfo extends Pick<kakao.maps.services.PlacesSearchResultItem, 'id'> {
	created_at: string;
	updated_at: string;
	main_photo_url: string;
	score: number;
	score_count: number;
}
