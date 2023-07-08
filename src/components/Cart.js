import LabelRow from "./LabelRow";
import CheckItems from "./CheckItems";
import Check from "./Check";

export default function Cart(props) {
  return (
    <div className="cart">
      <div className="checkout-card">
        <h1>Cart</h1>
        <LabelRow></LabelRow>
        <CheckItems {...props}></CheckItems>
        <Check items={props.items}></Check>
      </div>
    </div>
  );
}
