import { useEffect } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {id: '1', title: 'Car Insurance', amount: 294.67, date: new Date()},
    {id: '2', title: 'fasd agsafsd', amount: 1423.67, date: new Date()},
    {id: '3', title: 'berw ertqerq', amount: 523.67, date: new Date()},
    {id: '4', title: 'qwrr etntqeg', amount: 241.67, date: new Date()}
  ];

  const addExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense
    }
    expenses.push(expenseData);
  }
    
  return (
    <>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
