import './InvestmentItem.css';

export default function InvestmentItem(props) {

  let investedCapital = [];
  let interestYear = [];
  let totalInterest = [];
  let totalSavings = [];


  let year = [];
  for (let i = 1; i <= props.items.investmentDuration; i++) {
    year.push(i);
    investedCapital.push(props.items.currentSaving + (props.items.yearlySaving * i));
    if (interestYear.length === 0) {
      interestYear.push(props.items.currentSaving / 100 * props.items.expectedInterest);
    } else {
      interestYear.push(totalSavings[i- 2] / 100 * props.items.expectedInterest);
    }
    totalInterest.push(interestYear.reduce((acc, cur) => acc += cur));
    totalSavings.push(investedCapital[i - 1] + totalInterest[i - 1]);
    console.log(investedCapital,interestYear,totalInterest,totalSavings)
  }
  

  return (
    <>
      <div className="investment-item">
        <div className="investment-item__items">
          <div className="investment-item__text">Year</div>
          <ul className="investment-item__ul">
            {year.map((item, i) => (
              <li key={Number(i) + props.items.id}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="investment-item__items">
          <div className="investment-item__text">Total Saving</div>
          <ul className="investment-item__ul">
            {totalSavings.map((item, i) => (
              <li key={Number(i) + props.items.id}>${item.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</li>
            ))}
          </ul>
        </div>
        <div className="investment-item__items">
          <div className="investment-item__text">Interest (Year)</div>
          <ul className="investment-item__ul">
            {interestYear.map((item, i) => (
              <li key={Number(i) * props.items.id}>${item.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</li>
            ))}
          </ul>
        </div>
        <div className="investment-item__items">
          <div className="investment-item__text">Total Interest</div>
          <ul className="investment-item__ul">
            {totalInterest.map((item, i) => (
              <li key={Number(i) * props.items.id}>${item.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</li>
            ))}
          </ul>
        </div>
        <div className="investment-item__items">
          <div className="investment-item__text">Invested Capital</div>
          <ul className="investment-item__ul">
            {investedCapital.map((item, i) => (
              <li key={Number(i) + props.items.id}>${item.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</li>
            ))}
          </ul>
        </div>
        
      </div>
    </>
  );
}