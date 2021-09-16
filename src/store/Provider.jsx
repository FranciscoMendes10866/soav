import React, { createContext, useReducer } from "react";

import booksReducer from "./reducers/books";
import booksInitialState from "./initialStates/books";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [booksState, booksDispatch] = useReducer(
    booksReducer,
    booksInitialState
  );
  return (
    <GlobalContext.Provider
      value={{
        booksState,
        booksDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
