import React from 'react'
import styles from './Expenses.module.css'
import ExpenseList from './ExpenseList'

function Expenses(props) {
  
  return (
    <div className={styles.expenses}>

    <ExpenseList expenses={props.expenses}/>
    </div>
  )
}

export default Expenses