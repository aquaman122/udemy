import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meals/MealsSummery';

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
