import './App.css';
import Header from './component/Header';
import MealItem from './component/MealItem';

const content = [
  {
    menu: 'Sushi',
    description: 'Finest fish and veggies',
    expense: 22.99
  },
  {
    menu: 'Schnitzel',
    description: 'A german specialty',
    expense: 16.50
  },
  {
    menu: 'Barbecue Burger',
    description: 'American, raw, meaty',
    expense: 12.99
  },
  {
    menu: 'Green Bowl',
    description: 'Healthy...and green...',
    expense: 18.99
  }
]

function App() {
  return (
    <>
      <Header />
      
      <MealItem items={content}/>
    </>
  );
}

export default App;
