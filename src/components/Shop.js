import Cards from "./Cards";

export default function Shop({ items, addToCart }) {
  return (
    <div className="shop">
      <Cards items={items} addToCart={addToCart}></Cards>
    </div>
  );
}
