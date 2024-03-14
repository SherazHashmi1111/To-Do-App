import React from 'react'
import styles from './ExpenseList.module.css'
import ExpenseItem from './ExpenseItem'

function ExpenseList(props) {
  if(props.expenses.length === 0){
    return <p className={styles['no-expense-found']}>No expense Found</p>
  }
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