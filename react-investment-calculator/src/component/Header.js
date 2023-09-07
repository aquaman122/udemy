import './Header.css';
import MainImage from '../asset/investment-calculator-logo.png';

export default function Header() {

  return (
    <>
    <div className='header-container'>
      <div className='header__image'>
        <img src={MainImage}/>
      </div>
      <div className='header__text'>Investment Calculator</div>
    </div>
    </>
  );
}