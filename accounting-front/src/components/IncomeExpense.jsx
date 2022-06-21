import React, { useContext } from "react"
import { GlobalContext } from "../context/State"

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)

  return (
    <tr>
        <td className="">
          <span>TOTAL</span> <br />
          <span className="fs-5 text-success">{income} €</span>
        </td>
        <td className="justify-content-between">
          <span>TOTAL</span> <br />
          <span className="fs-5 text-danger">{expense} €</span>
        </td>
    </tr>
  )
}