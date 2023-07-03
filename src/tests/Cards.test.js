import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from "../components/Cards";

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
    inCart: 0,
  },
  {
    src: "path/to/image",
    name: "pat",
    price: "30.00",
    inCart: 0,
  },
];

describe("When displaying products", () => {
  it("renders accurate item info", () => {
    const { container } = render(<Cards items={items} addToCart={jest.fn()} />);
    expect(screen.queryAllByTestId("card").length).toBe(3);
    expect(screen.queryAllByTestId("name").length).toBe(3);
    expect(screen.queryAllByTestId("name")[0].textContent).toBe("JOOLA");
    expect(screen.queryAllByTestId("name")[2].textContent).toBe("pat");
    expect(screen.queryAllByTestId("price")[2].textContent).toBe("£30.00");
    expect(screen.queryAllByRole("button").length).toBe(3);
    expect(screen.queryAllByRole("button")[0].textContent).toBe("Add to Cart");
  });
});
