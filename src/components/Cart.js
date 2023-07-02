import LabelRow from "./LabelRow";
import CheckItems from "./CheckItems";

export default function Cart(props) {
  return (
    <div className="cart">
      <div className="checkout-card">
        <h1>Cart</h1>
        <LabelRow></LabelRow>
        <CheckItems {...props}></CheckItems>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}
