export default function Check({ items }) {
  const total = items.reduce(
    (total, curr) => total + curr.price * curr.inCart,
    0
  );
  return (
    <div className="check">
      <div>
        <span>Grand total : </span>
        <span className="amount" data-testid="grand-total">
          £{total.toFixed(2)}
        </span>
      </div>
      <button className="checkout">Checkout</button>
    </div>
  );
}
