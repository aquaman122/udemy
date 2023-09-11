import React, {useState} from 'react';
import './MealItem.css';
import Card from './Card';

export default function MealItem(props) {
  const [amount, setAmount] = useState(1);

  return (
    <>
      <Card className='cards'>
        {props.items.map((item, i) => (
          <div key={i} className='meal-container'>
            <div className='meal-menus'>
              <div>{item.menu}</div>
              <div>{item.description}</div>
              <div>${item.expense}</div>
            </div>
            <div className='meal-container__right'>
              <div className='meal-amount'>
                <div>Amount</div>
                <div>{amount}</div>
              </div>
              <button>+Add</button>
            </div>
          </div>
        ))}
      </Card>
    </>
  );
}