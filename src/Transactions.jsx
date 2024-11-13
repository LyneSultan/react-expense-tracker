import React, { useEffect, useState } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost/react-expense/src/server/getAllTransactions.php")
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      })
      .catch(error => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Date</th>
          <th>Notes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.type}</td>
            <td>{transaction.date}</td>
            <td>{transaction.notes}</td>
            <td>
              <button >Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Transactions;
