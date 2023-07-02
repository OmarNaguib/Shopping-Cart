export default function Cards({ items, addToCart }) {
  const cards = items.map((item, index) => (
    <div className="card">
      <img src={item.src} alt="" />
      <div className="name">{item.name}</div>
      <div className="price">£{item.price}</div>
      <button onClick={addToCart.bind(null, index)}>Add to Cart</button>
      {item.inCart ? "incart" : "not"}
    </div>
  ));
  return <div className="cards">{cards}</div>;
}
