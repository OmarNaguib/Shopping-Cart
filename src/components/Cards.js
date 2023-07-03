export default function Cards({ items, addToCart }) {
  const cards = items.map((item, index) => (
    <div className="card">
      <img src={item.src} alt="" />
      <div className="name">{item.name}</div>
      <div className="price">£{item.price}</div>
      <button
        onClick={addToCart.bind(null, index)}
        className={item.inCart ? "in-cart" : ""}
      >
        {item.inCart ? "In Cart " : "Add to Cart"}
      </button>
    </div>
  ));
  return <div className="cards">{cards}</div>;
}
