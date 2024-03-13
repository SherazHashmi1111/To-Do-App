import React, { useState } from "react";
import styles from "./NewExpenseForm.module.css";

function NewExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const priceChangeHandler = (e) => {
    const price = e.target.value;
    setPrice(price);
  };
  const dateChangeHandler = (e) => {
    const date = e.target.value;
    setDate(date);
  };

  const newExpenseSubmitHandler = (e) => {
    e.preventDefault();
    const newExpenseData = {
      id: Math.random().toFixed(8),
      title,
      date: new Date(date),
      price: +price,
    };
    props.onAddNewExpense(newExpenseData);
    setTitle("");
    setPrice("");
    setDate("");
  };
  return (
    <form onSubmit={newExpenseSubmitHandler} className={styles.form}>
      <div className={styles.inputs__box}>
        <div className={styles.input}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            step="10"
            onChange={priceChangeHandler}
            value={price}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="date">Date</label>
          <input
            onChange={dateChangeHandler}
            value={date}
            type="date"
            name="date"
            id="date"
            max="12-31-2024"
            min="01-01-2018"
          />
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btnAlt} onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.btn}>
          + Add
        </button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
