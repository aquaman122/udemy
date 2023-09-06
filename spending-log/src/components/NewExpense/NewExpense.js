import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

export default function NewExpense(props) {

  const saveExpenseDataHandler = (saveExpenseData) => {
    const expenseData = {
      ...saveExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <>
      <div className="new-expense">
        <ExpenseForm onSavaExpenseData={saveExpenseDataHandler} />
      </div>
    </>
  )
}