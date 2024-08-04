import { atom } from 'jotai';

export const searchValueAtom = atom('');

export const markerListAtom = atom<kakao.maps.services.PlacesSearchResult>([]);
