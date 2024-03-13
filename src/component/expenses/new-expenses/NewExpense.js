import React, { useState } from "react";
import styles from "./NewExpense.module.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const [isValid, setIsValid] = useState(false);
  const toggleExpenseHandler = (e) => {
    e.preventDefault();
    setIsValid(!isValid);
  };
  const newExpenseDataHandler = (data) => {
    props.newExpenseData(data);
  };
  return (
    <>
          <div className={styles["new-expense"]}>
        {isValid && (
          <button
            onClick={toggleExpenseHandler}
          >
            Add New Expense
          </button>
        )}
        {!isValid && (
          <NewExpenseForm
            onAddNewExpense={newExpenseDataHandler}
            onCancel={toggleExpenseHandler}
          />
        )}
      </div>
    </>
  );
}

export default NewExpense;
