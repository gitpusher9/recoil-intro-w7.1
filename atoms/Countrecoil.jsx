import { atom } from 'recoil'

export const CountAtom = atom({
    key: 'CountAtom',
    default: 0
});
//using recoil library
/* functions such as 
useRecoilValue,
useSetRecoilState,
useRecoilState
are used to access the state and update the state in the atom.
Recoil root that propagates the state to all the components that are wrapped in it.
*/