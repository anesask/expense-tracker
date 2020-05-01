import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Gas", amount: -50 },
    { id: 2, text: "Tax Return", amount: 150 },
    { id: 3, text: "Water Bill", amount: -120 },
    { id: 4, text: "Loan", amount: 1050 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
