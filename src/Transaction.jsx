import { useState } from "react";

function Transaction() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div>
      <input type="text" placeholder="Title" onChange={(e) => {
        setTitle(e.target.value);
      }} required />
      <input type="number" placeholder="Amount" onChange={(e) => {
        setAmount(e.target.value);
        console.log(amount);
      }
      } required />
      <select name="type" onChange={(e) => {
        setType(e.target.value);
        console.log(type);

      }
      }>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="date" onChange={(e) => {
        setDate(e.target.value);
      }
      } />
      <input type="text" placeholder="Notes"
        onChange={(e) => {
          setNotes(e.target.value);
          console.log(notes);

        }
        } />
      <button id="submit" type="submit" onClick={
        () => {
          const form = new FormData();
          form.append("title", title);
          form.append("amount", amount);
          form.append("type", type);
          form.append("date", date);
          form.append("notes", notes);

          fetch("http://localhost/react-expense/src/server/create_transaction.php", {
            method: "POST",
            body: form
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.error("Error:", error);
            });

        }
      }>Add Transaction</button>
    </div>
  );
}
export default Transaction;
