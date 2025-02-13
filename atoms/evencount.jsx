import { selector } from "recoil";
import { CountAtom } from "./Countrecoil";

export const EvenCount = selector({
    key: "EvenCount",
    get: ({get}) => {
        const count = get(CountAtom);
        return count % 2 ;
    }
})