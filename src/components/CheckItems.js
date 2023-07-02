export default function CheckItems({
  removeFromCart,
  increment,
  decrement,
  items,
}) {
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
          <div className="subtotal">
            £{(Math.round(item.price * item.inCart * 100) / 100).toFixed(2)}
          </div>
          <button onClick={removeFromCart.bind(null, item.id)}>delete</button>
        </div>
      );
    });
  return <>{checkItems}</>;
}
