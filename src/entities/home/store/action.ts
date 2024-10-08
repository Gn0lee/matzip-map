import { searchValueAtom } from 'src/entities/home/store/atom';
import { atom } from 'jotai';

export const setSearchValueAtom = atom<null, string[], void>(null, (_, set, value) => {
	set(searchValueAtom, value);
});
