import React,{useState} from 'react';

import './App.css';
import Card from './component/Card';
import GoalForm from './component/GoalForm';
import GoalList from './component/GoalList';

function App() {
  const [data, setData] = useState([]);

  const addInputTitle = (userData) => {
    setData((prevData) => {
      return [userData, ...prevData];
    })
  }

  return (
    <>
    <Card>
      <GoalForm onAddUserData={addInputTitle} />
      <GoalList items={data} />
    </Card>
    </>
  );
}

export default App;
