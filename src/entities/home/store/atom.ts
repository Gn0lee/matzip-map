import { atom } from 'jotai';

export const searchValueAtom = atom('');

export const markerListAtom = atom<kakao.maps.services.PlacesSearchResult>([]);

export const selectedSearchResultAtom = atom<kakao.maps.services.PlacesSearchResultItem | undefined>(undefined);

export const isMapCenterChangedAtom = atom(false);
