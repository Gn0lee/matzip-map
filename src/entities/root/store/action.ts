import { searchValueAtom } from 'src/entities/root/store/atom.ts';
import { atom } from 'jotai';

export const setSearchValueAtom = atom<null, string[], void>(null, (_, set, value) => {
	set(searchValueAtom, value);
});
