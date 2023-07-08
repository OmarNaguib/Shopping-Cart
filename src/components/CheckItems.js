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
        <div className="checkout-item" data-testid="checkout-item" key={index}>
          <div className="product">
            <img src={item.src} alt="" />
            <div className="name" data-testid="name">
              {item.name}
            </div>
          </div>
          <div className="price" data-testid="price">
            £{item.price}
          </div>
          <div className="quantity" data-testid="quantity">
            <div className="number" data-testid="number">
              {item.inCart}
            </div>
            <div className="buttons">
              <button onClick={increment.bind(null, item.id)}>+</button>
              <button onClick={decrement.bind(null, item.id)}>-</button>
            </div>
          </div>
          <div className="subtotal" data-testid="subtotal">
            £{(Math.round(item.price * item.inCart * 100) / 100).toFixed(2)}
          </div>
          <button
            className="delete"
            onClick={removeFromCart.bind(null, item.id)}
          >
            delete
          </button>
        </div>
      );
    });
  return <>{checkItems}</>;
}
