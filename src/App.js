import React, { useState } from "react";
import Expenses from "./component/expenses/Expenses";
import NewExpense from "./component/new-expenses/NewExpense";
import styles from './App.module.css' 
import Header from "./component/pages/Header";



function App() {
  const [expenses, setNewExpenses] = useState([]);
  const newExpenseDataHandler = (data) => {
    setNewExpenses((prev) => {
      return [data, ...prev];
    });
  };
  const deleteExpenseHandler = (id) => {
    setNewExpenses((prevExpenses) => {
      const items = prevExpenses.filter(expense  => expense.id !== id);
      return items
    });
  } 
  return (
    <div className={styles.App}>
      <Header/>
      <NewExpense newExpenseData={newExpenseDataHandler} />
      <Expenses expenses={expenses} onDelete={deleteExpenseHandler}/>
    </div>
  );
}

export default App;
