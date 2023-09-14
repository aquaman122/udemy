import './Meals.css';
import MealsSummery from './MealsSummery';
import AvailableMeals from './AvailableMeals';

export default function Meals() {

  return (
    <>
      <div className="meal-container">
        {/* <MealsSummery /> */}
        <AvailableMeals />
      </div>
    </>
  );
}
