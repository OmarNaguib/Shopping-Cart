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
      inCart: 0,
    },
    {
      src: "path/to/image",
      name: "table",
      price: "50.00",
      inCart: 1,
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

describe("When displaying cart items", () => {
  it("displays only inCart items", () => {
    const { items, removeFromCart, increment, decrement } = setup();
    const { container } = render(
      <CheckItems
        items={items}
        removeFromCart={removeFromCart}
        increment={increment}
        decrement={decrement}
      />
    );
    expect(screen.queryAllByTestId("checkout-item").length).toBe(2);
    expect(screen.queryAllByTestId("name").length).toBe(2);
    expect(screen.queryAllByTestId("name")[0].textContent).toBe("table");
  });
});
