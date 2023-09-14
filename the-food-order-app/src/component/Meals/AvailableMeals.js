import React from 'react';
import './AvailableMeals.css';

const DUMMY_MEALS = [
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

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal, i) => <li key={i}>{meal.menu}</li>);
  
  return (
    <>
      <section className='meals'>
        <ul>
          {mealsList}
        </ul>
      </section>
    </>
  );
}

{/* {DUMMY_MEALS.map((item, i) => (
  <div key={i} className='meal-item-container'>
    <div className='meal-menus'>
      <div className='menu__name'>{item.menu}</div>
      <div className='menu__description'>{item.description}</div>
      <div className='menu__expense'>${item.expense}</div>
    </div>
    <div className='meal-container__right'>
      <div className='meal-amount'>
        <div className='meal-amount__text'>Amount</div>
        <input type="number" className='meal-amount__count' />
      </div>
      <button className='amount__add__btn'>+Add</button>
    </div>
  </div>
))} */}