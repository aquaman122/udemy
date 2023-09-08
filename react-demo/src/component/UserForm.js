import React, {useState} from 'react';
import './UserForm.css';

import Card from "../component/UI/Card";
import ErrorModal from './UI/ErrorModal';

export default function UserForm(props) {
  const [isDating, setIsDating] = useState(false);
  const [userInput, setUserInput] = useState({
    enteredUserName: '',
    enteredAge: '',
    id: ''
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: userInput.enteredUserName,
      age: userInput.enteredAge,
      id: Math.random().toString()
    }

    if (!userData.username || +userData.age < 0 || +userData.age > 150) {
      setIsDating(true);
      return;
    }

    props.onSaveUserInputData(userData);

    setUserInput({
      enteredUserName: '',
      enteredAge: '',
      id: ''
    })
  }

  return (
    <>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card>
        <form onSubmit={onSubmitHandler}>
          <div className="user-form__input">
            <p>Username</p>
            <input type="text" onChange={(event) => {setUserInput({...userInput, enteredUserName: event.target.value})}} />
          </div>
          <div className="user-form__input">
            <p>Age (Years)</p>
            <input type="number" step="1" onChange={(event) => {setUserInput({...userInput, enteredAge: event.target.value})}} />
          </div>
          <button className='user-form__button'>Add User</button>
        </form>
      </Card>
    </>
  );
}