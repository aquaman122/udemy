import {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const [filteredInfoText, setFilteredInfoText] = useState('2021, 2023 & 2024');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    if (selectedYear === '2022') {
      setFilteredInfoText('2021, 2023 & 2024');
    } else if (selectedYear === '2023') {
      setFilteredInfoText('2022, 2024 & 2025')
    }
  }

  return (
    <>
      <div className="expenses">
        {props.items.map((item, i) => (
          <ExpenseItem 
            key={item.id} 
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </div>
    </>
  )
}