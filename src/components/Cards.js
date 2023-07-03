export default function Cards({ items, addToCart }) {
  const cards = items.map((item, index) => (
    <div className="card" data-testid="card">
      <div
        className="img"
        style={{
          backgroundImage: `url("${item.src}")`,
        }}
      ></div>
      <div className="name" data-testid="name">
        {item.name}
      </div>
      <div className="price" data-testid="price">
        £{item.price}
      </div>
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
