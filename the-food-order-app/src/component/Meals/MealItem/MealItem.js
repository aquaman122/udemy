import './MealItem.css';
import MealItemForm from './MealItemForm';

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <>
      <li className='meal'>
        <div>
          <h3>{props.menu}</h3>
          <div className='meal-description'>{props.description}</div>
          <div className='meal-price'>{price}</div>
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
    </>
  );
}