import React, { useState } from "react";
import styles from "./NewExpenseForm.module.css";

function NewExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState('');

  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidPrice, setIsValidPrice] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);

  const titleChangeHandler = (e) => {
    const title = e.target.value;
    setIsValidTitle(true);
    setTitle(title);
  };
  const priceChangeHandler = (e) => {
    const price = e.target.value;
    setPrice(price);
    setIsValidPrice(true);
  };
  const dateChangeHandler = (e) => {
    const date = e.target.value;
    setDate(date);
    setIsValidDate(true);
  };
  
  const newExpenseSubmitHandler = (e) => {
    e.preventDefault();
    if(title.trim().length  === 0){
      setIsValidTitle(false);
      return;
    }
    if(price === ''){
      setIsValidPrice(false);
      return;
    }
    if(date.toString() === ''){
      setIsValidDate(false);
      return;
    }
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
  }
  return (
    <form onSubmit={newExpenseSubmitHandler} className={styles.form}>
      <div className={styles.inputs__box}>
        <div className={`${styles.input__section} ${!isValidTitle && styles.invalid}`}>
          <label htmlFor="title" >Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleChangeHandler}
            value={title}
            placeholder={!isValidTitle ? 'Please enter a valid title!': ''}
            />
        </div>
        <div className={`${styles.input__section} ${!isValidPrice && styles.invalid}`} >
          <label htmlFor="price" >Price</label>
          <input
            type="number"
            name="price"
            id="price"
            step="any"
            min='0'
            max='99999'
            onChange={priceChangeHandler}
            value={price}
          placeholder={!isValidPrice ? 'Please enter a valid Price!': ''}
          />
        </div>
        <div className={`${styles.input__section} ${!isValidDate && styles.invalid}`}>
          <label htmlFor="date" >Date</label>
          <input
            onChange={dateChangeHandler}
            value={date}
            type="date"
            name="date"
            id="date"
            max="2024-12-31"
            min="2018-01-01"
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
