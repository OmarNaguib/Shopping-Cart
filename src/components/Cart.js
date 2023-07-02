export default function Cart({ removeFromCart, increment, decrement, items }) {
  const checkItems = items
    .filter((item) => item.inCart)
    .map((item, index) => {
      return (
        <div className="checkout-item">
          <img src={item.src} alt="" />
          <div className="name">{item.name}</div>
          <div className="price">£{item.price}</div>
          <div className="quantity">£{item.inCart}</div>
          <button onClick={increment.bind(null, item.id)}>+</button>
          <button onClick={decrement.bind(null, item.id)}>-</button>
          <button onClick={removeFromCart.bind(null, item.id)}>delete</button>
          {item.inCart ? "incart" : "not"}
        </div>
      );
    });
  return (
    <div className="cart">
      <div className="checkout-card">{checkItems}</div>
    </div>
  );
}
