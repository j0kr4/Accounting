import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initialState = {
    transactions: [
        {id: 1, text: "Buy sandwich", amount: -6},
        {id: 2, text: "Buy Assurance", amount: -95},
        {id: 3, text: "Salary", amount: 1300},
        {id: 4, text: "Buy KTM", amount: -5900},
    ],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                addTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}