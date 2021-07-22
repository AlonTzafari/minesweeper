import {createContext} from 'react';

const gameContext = createContext();
export default gameContext;
export const gameProvider = gameContext.Provider;