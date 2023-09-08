import React, {useState} from 'react';
import './App.css';
import UserForm from './component/UserForm';
import UserList from './component/UserList';

function App() {
  const [user, setUser] = useState([]);

  const saveUserInputData = (userData) => {
    setUser((userInputData) => {
      return [...userInputData, userData];
    })
  }

  return (
    <>
      <UserForm onSaveUserInputData={saveUserInputData} />
      <UserList items={user} />
    </>
  );
}

export default App;
