import './App.css';
import { useState } from 'react';
import reactLogo from '../src/images/images.png';

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Hooks (e.g., useEffect())",
    "It makes building complex, interactive UIs a breeze",
    "React Native (build native mobile apps with React)"
  ],
];

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
   <>
    <header>
      <img src={reactLogo} alt="logo"/>
      <div>
        <div className="header__title">React.js</div>
        <div className="header__text">i.e., using the React library for rendering the UI</div>
      </div>
    </header>

    <div className="main__title">
      <button className={activeContentIndex === 0 ? "active" : ""} 
        onClick={() => setActiveContentIndex(0)}>Why React?</button>
      <button className={activeContentIndex === 1 ? "active" : ""}
        onClick={() => setActiveContentIndex(1)}>Core Features</button>
      <button className={activeContentIndex === 2 ? "active" : ""}
        onClick={() => setActiveContentIndex(2)}>Related Resources</button>
      <button className={activeContentIndex === 3 ? "active" : ""}
        onClick={() => setActiveContentIndex(3)}>Why Sukwon?</button>
    </div>
      <div id="tab-content">
        <ul>
          {content[activeContentIndex].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
   </>
  );
}

export default App;
