import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="title">TT Shop</div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="cart">Cart</NavLink>
      </div>
    </div>
  );
}
