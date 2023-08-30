import './App.css';
import reactLogo from '../src/public/images.png';

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
  
  return (
   <>
    <header>
      <img src={reactLogo} />
      <div></div>
    </header>
   </>
  );
}

export default App;
