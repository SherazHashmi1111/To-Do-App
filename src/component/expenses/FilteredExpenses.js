import React from 'react'
import styles from './FilteredExpenses.module.css'

function FilteredExpenses(props) {
    const filterChangeHandler = (e) => {
        props.filteredYear(e.target.value);
    }
  return (
    <div className={styles.filter}>
        <span>Filter By Year</span>
        <select name="year" id="year" onChange={filterChangeHandler} value={props.selected}>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
    </div>
  )
}

export default FilteredExpenses