import React from 'react';
import useInitialState from '../hooks/useInitialState';

const Context = React.createContext({});

export function AppContextProvider ({ children }) {
  const initialState = useInitialState();

  return (
    <Context.Provider value={initialState}>
      {children}
    </Context.Provider>
  );
}
 
export default Context;
