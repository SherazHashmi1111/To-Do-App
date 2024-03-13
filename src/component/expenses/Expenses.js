import React from 'react'
import styles from './Expenses.module.css'
import ExpenseList from './ExpenseList'
import FilteredExpenses from './FilteredExpenses'

function Expenses(props) {
  
  return (
    <div className={styles.expenses}>
      <FilteredExpenses/>
    <ExpenseList expenses={props.expenses}/>
    </div>
  )
}

export default Expenses