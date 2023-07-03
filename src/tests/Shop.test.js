import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "../components/Shop";

const items = [
  {
    src: "/static/media/1table_JOOLA J15 INSIDE TABLE TENNIS TABLE_599.00.dd9ef9f4bbc1398f6cc7.jpg",
    name: "JOOLA J15 INSIDE TABLE TENNIS TABLE",
    price: "599.00",
    inCart: 0,
  },
];

describe("Shop page", () => {
  it("renders with one item", () => {
    const { container } = render(<Shop items={items} addToCart={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
