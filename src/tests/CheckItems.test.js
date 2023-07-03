import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckItems from "../components/CheckItems";
import userEvent from "@testing-library/user-event";

function setup() {
  const items = [
    {
      src: "path/to/image",
      name: "JOOLA",
      price: "599.00",
      inCart: 1,
    },
    {
      src: "path/to/image",
      name: "table",
      price: "50.00",
      inCart: 0,
    },
    {
      src: "path/to/image",
      name: "pat",
      price: "30.00",
      inCart: 1,
    },
  ];

  const removeFromCart = jest.fn();
  const increment = jest.fn();
  const decrement = jest.fn();

  return { items, removeFromCart, increment, decrement };
}
