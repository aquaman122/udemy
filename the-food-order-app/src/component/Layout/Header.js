import './Header.css';
import { BsCartFill } from 'react-icons/bs';
import mealsImage from '../../asset/meals.jpeg';

export default function Header() {

  return (
    <>
      <header>
        <div className='header-logo'>ReactMeals</div>
        <button className='header-cart'>
          <div><BsCartFill /></div>
          <div className='header-cart__text'>Your Cart</div>
          <div className='header-cart__count'>{`2`}</div>
        </button>
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicious food' />
      </div>
    </>
  )
}
