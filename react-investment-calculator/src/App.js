import React, {useState} from 'react';
import './App.css';
import Card from './component/Card';
import Header from './component/Header';
import InvestmentItem from './component/investment/InvestmentItem';
import InvestmentForm from './component/newInvestment/InvestmentForm';

function App() {
  const [userData , setUserData] = useState([]);

  const saveUserInputData = (userInputData) => {
    setUserData(userInputData);
  }

  return (
    <>
      <Card>
        <Header />
        <InvestmentForm onSaveUserInputData={saveUserInputData} />
        <InvestmentItem items={userData} />
      </Card>
    </>
  );
}

export default App;
