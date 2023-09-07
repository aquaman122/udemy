import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })
  const [isDating, setIsDating] = useState(false);

  const onTitleHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value }
    })
  }

  const onAmountHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredAmount: event.target.value }
    })
  }
  const onDateHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredDate: event.target.value }
    })
  }

  const onSumbitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: Number(userInput.enteredAmount),
      date : new Date(userInput.enteredDate)
    }
    props.onSavaExpenseData(expenseData);

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate : ''
    });
    setIsDating(false);
  };

  const onConditionHandler = (event) => {
    setIsDating(false);
  }

  return (
    <>
      <form onSubmit={onSumbitHandler}>
        {isDating === true ? (
        <>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={userInput.enteredTitle} onChange={onTitleHandler}  />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={userInput.enteredAmount} onChange={onAmountHandler} min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={userInput.enteredDate} onChange={onDateHandler} min="2021-01-01" max="2023-12-31" />
          </div>
        </div>
        <div className="new-expense__action">
          <button onClick={onConditionHandler} className='new-expense__cancel'>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
        </>) : 
        (
        <div>
          <div className="new-expense__action">
            <button onClick={() => {setIsDating(true)}}>Add New Expense</button>
          </div>
        </div>
        )}
      </form>
    </>
  )
}