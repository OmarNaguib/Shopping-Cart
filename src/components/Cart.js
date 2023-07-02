import LabelRow from "./LabelRow";

export default function Cart({ removeFromCart, increment, decrement, items }) {
  const checkItems = items
    .filter((item) => item.inCart)
    .map((item, index) => {
      return (
        <div className="checkout-item">
          <div className="product">
            <img src={item.src} alt="" />
            <div className="name">{item.name}</div>
          </div>
          <div className="price">£{item.price}</div>
          <div className="quantity">
            <div className="number">{item.inCart}</div>
            <div className="buttons">
              <button onClick={increment.bind(null, item.id)}>+</button>
              <button onClick={decrement.bind(null, item.id)}>-</button>
            </div>
          </div>
          <div className="subtotal">£{item.price * item.inCart}</div>
          <button onClick={removeFromCart.bind(null, item.id)}>delete</button>
        </div>
      );
    });
  return (
    <div className="cart">
      <div className="checkout-card">
        <h1>Cart</h1>
        <LabelRow></LabelRow>
        {checkItems}
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}
