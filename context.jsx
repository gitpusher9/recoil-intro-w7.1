import { createContext } from 'react'; 
export const CountContext = createContext(0);

//wrap anyone who wan t to use context api to teleport
//wrap in context provider
//wrap the component in the context provider