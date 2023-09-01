import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

export default function Expenses(props) {
  return (
    <>
      <Card className="expenses">
        {props.map(item => {
          <ExpenseItem 
          key={props.id} 
          title={props.title} 
          amount={props.amount}
          date={props.date}
          />
        })}
      </Card>
    </>
  )
}