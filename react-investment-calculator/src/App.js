import './App.css';
import Card from './component/Card';
import Header from './component/Header';
import InvestmentForm from './component/newInvestment/InvestmentForm';

function App() {
  return (
    <>
      <Card>
        <Header />
        <InvestmentForm />
      </Card>
    </>
  );
}

export default App;
