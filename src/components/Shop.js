import getData from "../utils/getData";
import { useState } from "react";
import Cards from "./Cards";

export default function Shop() {
  return (
    <div className="shop">
      <Cards data={getData()}></Cards>
    </div>
  );
}
