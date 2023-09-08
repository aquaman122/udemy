import React, {useState} from 'react';
import './UserForm.css';

import Card from "../component/UI/Card";
import ErrorModal from './UI/ErrorModal';

export default function UserForm(props) {
  const [userInput, setUserInput] = useState({
    enteredUserName: '',
    enteredAge: '',
    id: ''
  });
  const [error, setError] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: userInput.enteredUserName,
      age: userInput.enteredAge,
      id: Math.random().toString()
    }

    if (userInput.enteredUserName.trim().length === 0 || userInput.enteredUserName.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+userInput.enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onSaveUserInputData(userData);

    setUserInput({
      enteredUserName: '',
      enteredAge: '',
      id: ''
    })
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} title='Invalid input' message='Please enter a valid name and age (non-empty values).' />}
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