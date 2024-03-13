import React, { useState } from "react";
import Expenses from "./component/expenses/Expenses";
import NewExpense from "./component/new-expenses/NewExpense";
import styles from './App.module.css' 

const dummyExpenses = [
  {
    id: "e1",
    date: new Date(),
    title: "Bought a blanket",
    price: 23.45,
  },
  {
    id: "e2",
    date: new Date(),
    title: "Bought a chair",
    price: 23.45,
  },
  {
    id: "e3",
    date: new Date(),
    title: "Bought a Book",
    price: 25.4999,
  },
];


function App() {
  const [expenses, setNewExpenses] = useState(dummyExpenses);
  const newExpenseDataHandler = (data) => {
    setNewExpenses((prev) => {
      return [data, ...prev];
    });
  };
  return (
    <div className={styles.App}>
      <NewExpense newExpenseData={newExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
