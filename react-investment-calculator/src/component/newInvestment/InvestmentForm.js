import './InvestmentForm.css';

export default function InvestmentForm() {

  return (
    <>
      <form>
        <div className='investment-form__container'>
          <div className='investment-form__inner'>
            <div className='investment-form__inputs'>
              <p>CURRENT SAVING($)</p>
              <input type="number" />
            </div>
            <div className='investment-form__inputs'>
              <p>YEARLY SAVING($)</p>
              <input type="number" />
            </div>
            <div className='investment-form__inputs'>
              <p>EXPECTED INTEREST(%, PER YEAR)</p>
              <input type="number" />
            </div>
            <div className='investment-form__inputs'>
              <p>INVESTMENT DURATION(YEARS)</p>
              <input type="number" />
            </div>
          </div>
          <div className='investment-form__buttons'>
            <button>Reset</button>
            <button>Calculate</button>
          </div>
        </div>
      </form>
    </>
  );
}