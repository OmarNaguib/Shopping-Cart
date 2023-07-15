import { NavLink } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <div className="header">
      <div className="title">TT Shop</div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="cart">Cart</NavLink>
        <div className="cart-count" data-testid="cart-count">
          {cartCount}
        </div>
      </div>
    </div>
  );
}
