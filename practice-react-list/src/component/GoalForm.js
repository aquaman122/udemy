import React, {useState} from 'react';
import './GoalForm.css';

export default function GoalForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    id: '',
  });

  const onChagneInputHandler = (event) => {
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value }
    })
  }

  const onSumbitHandler = (event) => {
    event.preventDefault();

    const UserData = {
      title: userInput.enteredTitle,
      id: Math.random().toString()
    }

    props.onAddUserData(UserData);
    setUserInput({
      enteredTitle: ''
    })
  }

  return (
    <>
      <div className="GoalForm-container">
        <div className='GoalForm__inner'>
        <h2>Course Goal</h2>
          <form onSubmit={onSumbitHandler}>
            <div className="GoalForm__form">
              <div>
                <input onChange={onChagneInputHandler} type="text" value={userInput.enteredTitle} />
              </div>
              <button>Add Goal</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}