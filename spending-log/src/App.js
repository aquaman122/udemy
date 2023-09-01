import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date()},
    {id: 'e2', title: 'fasd agsafsd', amount: 1423.67, date: new Date()},
    {id: 'e3', title: 'berw ertqerq', amount: 523.67, date: new Date()},
    {id: 'e4', title: 'qwrr etntqeg', amount: 241.67, date: new Date()}
  ]
  return (
    <>
      {expenses.map(item => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </>
  );
}

export default App;
