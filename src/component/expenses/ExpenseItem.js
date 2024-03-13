import React from "react";
import styles from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  const day = props.date.toLocaleDateString("ur-PK", { weekday: "long" });
  const year = props.date.toLocaleDateString("ur-PK", { year: "numeric" });
  const month = props.date.toLocaleDateString("ur-PK", { month: "long" });
  const price = props.price.toFixed(2);

  return (
    <div className={styles["expense-item"]}>
      <div className={styles["expense-item__info"]}>
        <div className={styles["expense-item__date"]}>
          <span className={styles["expense-item__day"]}>{day}</span>
          <span className={styles["expense-item__month"]}>{month}</span>
          <span className={styles["expense-item__year"]}>{year}</span>
        </div>
        <h3>{props.title}</h3>
      </div>
      <p>$ {price}</p>
    </div>
  );
}

export default ExpenseItem;
