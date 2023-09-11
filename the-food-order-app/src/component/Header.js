import './Header.css';
import { BsCartFill } from 'react-icons/bs';

export default function Header() {

  return (
    <>
      <header>
        <div className='header-logo'>ReactMeals</div>
        <div className='header-cart'>
          <div><BsCartFill /></div>
          <div className='header-cart__text'>Your Cart</div>
          <div className='header-cart__count'>{`2`}</div>
        </div>
      </header>
    </>
  )
}
