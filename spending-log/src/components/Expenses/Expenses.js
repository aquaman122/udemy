import {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

  return (
    <>
      <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map(item => (
          <ExpenseItem 
            title={item.title}
            amount={item.amount}
            key={item.id}
            date={item.date}
          />
        ))}
      </div>
    </>
  )
}