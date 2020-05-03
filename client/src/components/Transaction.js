import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <div className="transaction-container">
        {transaction.text}
        <p className="transaction-date">
          {new Date(transaction.createdAt).toLocaleDateString()}{" "}
        </p>
      </div>

      <span>
        {sign} €{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
};
