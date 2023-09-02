import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date()},
    {id: 'e2', title: 'fasd agsafsd', amount: 1423.67, date: new Date()},
    {id: 'e3', title: 'berw ertqerq', amount: 523.67, date: new Date()},
    {id: 'e4', title: 'qwrr etntqeg', amount: 241.67, date: new Date()}
  ]
  return (
    <>
      <Expenses items={expenses} />
    </>
  );
}

export default App;
