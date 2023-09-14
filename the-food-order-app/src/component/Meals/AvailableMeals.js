import React from 'react';
import './AvailableMeals.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    menu: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99
  },
  {
    menu: 'Schnitzel',
    description: 'A german specialty',
    price: 16.50
  },
  {
    menu: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99
  },
  {
    menu: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99
  }
]

export default function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal, i) => 
  <MealItem key={i} 
    menu={meal.menu} 
    description={meal.description} 
    price={meal.price} 
  />)
  
  return (
    <>
      <section className='meals'>
        <Card>
          <ul>
            {mealList}
          </ul>
        </Card>
      </section>
    </>
  );
}