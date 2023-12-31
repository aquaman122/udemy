import Input from '../../UI/Input';
import './MealItemForm.css';

export default function MealItemForm() {

  return (
    <>
      <form className="form">
        <Input label="Amount" input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} />
        <button>+ Add</button>
      </form>
    </>
  );
}