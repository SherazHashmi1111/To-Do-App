import React, { useState } from "react";
import styles from "./Expenses.module.css";
import ExpenseList from "./ExpenseList";
import FilteredExpenses from "./FilteredExpenses";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredYearHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div className={styles.expenses}>
      <FilteredExpenses
        filteredYear={filteredYearHandler}
        selected={filteredYear}
      />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
