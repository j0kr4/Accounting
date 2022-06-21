import React, { useContext } from "react"
import { Transaction } from "./Transaction"
import { GlobalContext } from "../context/State"
import { IncomeExpense } from "./IncomeExpense"
import { Balance } from "./Balance"

export const TransactionList = () => {
  const context = useContext(GlobalContext)

  const { transactions } = useContext(GlobalContext)

  return (
    <>
      <h5>Expenses</h5>

    <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Incoming</th>
            <th scope="col">Outgoing</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
            ></Transaction>
          ))}
          <IncomeExpense></IncomeExpense>
          <Balance></Balance>          
        </tbody>
    </table>
    </>
  )
}