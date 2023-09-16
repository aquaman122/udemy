import './Cart.css';

export default function Cart(props) {
  const cartItems = <ul className="cart-items">{[
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99},
  ].map((item) => <li>{item.name}</li>)}
  </ul>

  return (
    <>
      <div>
        {cartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>{}</span>
        </div>
        <div className="actions">
          <button className="button-alt">Close</button>
          <button className="button">Order</button>
        </div>
      </div>
    </>
  );
}