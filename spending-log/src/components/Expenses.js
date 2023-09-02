import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

export default function Expenses(props) {

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