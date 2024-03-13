import React from 'react'
import styles from './ExpenseList.module.css'
import ExpenseItem from './ExpenseItem'

function ExpenseList(props) {
  return (
    <div className={styles.expense__list}>
      {
        props.expenses.map(expense => (
          <ExpenseItem
          key= {expense.id}
          id= {expense.id}
          title= {expense.title}
          date= {expense.date}
          price= {expense.price}
          />

        ))
      }
    </div>
  )
}

export default ExpenseList