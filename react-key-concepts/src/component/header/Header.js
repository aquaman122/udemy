import './Header.css';
import keyConceptsImage from '../../assets/images/key-concepts.png';

export default function Header() {
  return (
    <>
      <header>
        <div>
          <img src={keyConceptsImage} alt="Medal badge with a star" />
        </div>
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
    </>
  )
}