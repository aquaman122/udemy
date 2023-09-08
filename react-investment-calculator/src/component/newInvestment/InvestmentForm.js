import React, {useState} from 'react';
import './InvestmentForm.css';

const initialValue = {
  enteredCurrentSaving: 10000,
  enteredYearlySaving: 1200,
  enteredExpectedInterest: 5,
  enteredInvestmentDuration: 15,
  id: Math.random().toString()
}

export default function InvestmentForm(props) {
  const [userInput, setUserInput] = useState(initialValue)

  const onChangeCurrentSaving = (event) => {
    setUserInput({
      ...userInput,
      enteredCurrentSaving: event.target.value
    });
  }

  const onChangeYearlySaving = (event) => {
    setUserInput({
      ...userInput,
      enteredYearlySaving: event.target.value
    })
  }
  const onChangeExpectedInterest = (event) => {
    setUserInput({
      ...userInput,
      enteredExpectedInterest: event.target.value
    })
  }
  const onChangeInvestmentDuration = (event) => {
    setUserInput({
      ...userInput,
      enteredInvestmentDuration: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userInputData = {
      currentSaving: Number(userInput.enteredCurrentSaving),
      yearlySaving: Number(userInput.enteredYearlySaving),
      expectedInterest: Number(userInput.enteredExpectedInterest),
      investmentDuration: Number(userInput.enteredInvestmentDuration),
      id: Number(Math.random().toString())
    }

    props.onSaveUserInputData(userInputData)

    setUserInput({
      enteredCurrentSaving: '',
      enteredYearlySaving: '',
      enteredExpectedInterest: '',
      enteredInvestmentDuration: '',
      id: ''
    });
  }

  const onClickReset = (event) => {
    event.preventDefault();
    setUserInput(initialValue);
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className='investment-form__container'>
          <div className='investment-form__inner'>
            <div className='investment-form__inputs'>
              <p>CURRENT SAVING($)</p>
              <input type="number" onChange={onChangeCurrentSaving} value={userInput.enteredCurrentSaving} />
            </div>
            <div className='investment-form__inputs'>
              <p>YEARLY SAVING($)</p>
              <input type="number" onChange={onChangeYearlySaving} value={userInput.enteredYearlySaving}/>
            </div>
            <div className='investment-form__inputs'>
              <p>EXPECTED INTEREST(%, PER YEAR)</p>
              <input type="number" max="100" min="1" onChange={onChangeExpectedInterest} value={userInput.enteredExpectedInterest}/>
            </div>
            <div className='investment-form__inputs'>
              <p>INVESTMENT DURATION(YEARS)</p>
              <input type="number" max="20" step="1" onChange={onChangeInvestmentDuration} value={userInput.enteredInvestmentDuration} />
            </div>
          </div>
          <div className='investment-form__buttons'>
            <button onClick={onClickReset}>Reset</button>
            <button>Calculate</button>
          </div>
        </div>
      </form>
    </>
  );
}