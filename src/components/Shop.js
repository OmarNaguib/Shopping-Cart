import getData from "../utils/getData";
import { useState } from "react";
import Cards from "./Cards";

export default function Shop({ items, addTocart }) {
  return (
    <div className="shop">
      <Cards items={items} addTocart={addTocart}></Cards>
    </div>
  );
}
