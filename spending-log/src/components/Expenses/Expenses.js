import {useState} from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <>
      <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </div>
    </>
  )
}