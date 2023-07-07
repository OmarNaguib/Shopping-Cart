import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="home-message">
        <div className="text">
          <span>Athletes are cool,</span>
          <span>But some are just... </span>
          <span className="special-text">Exceptional.</span>
          <NavLink to="shop">Get Ready!</NavLink>
        </div>
      </div>
    </div>
  );
}
