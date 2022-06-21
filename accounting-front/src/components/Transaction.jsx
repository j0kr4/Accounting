import React from "react"

export const Transaction = ({ transaction }) => {
//   const sign = transaction.amount < 0 ? "-" : "+"

  return (
    <tr className="text-end">
      <td>
        <span className="text-success">{transaction.amount >= 0 ? transaction.amount + " € " : null}</span> <br />
        {transaction.amount >= 0 ? transaction.text : null}
      </td>
      <td>
        <span className="text-danger">{transaction.amount < 0 ? transaction.amount + " € " : null} <br /></span>
        {transaction.amount < 0 ? transaction.text : null}
      </td>
    </tr>
  )
}