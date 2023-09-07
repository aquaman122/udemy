import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
    
  return (
    <>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
