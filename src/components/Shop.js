import Cards from "./Cards";

export default function Shop({ items, addToCart }) {
  return (
    <div className="shop">
      <div className="content">
        <h1>Equipment</h1>
        <Cards items={items} addToCart={addToCart}></Cards>
      </div>
    </div>
  );
}
