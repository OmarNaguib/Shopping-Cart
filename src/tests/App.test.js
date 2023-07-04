import React from "react";
import { queryAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("App Integration test", () => {
  it("Displays items in shop", async () => {
    render(<App />);
    const user = userEvent.setup();

    const toShop = screen.queryByRole("link", { name: "Shop" });
    await userEvent.click(toShop);

    expect(screen.queryAllByTestId("card").length).toBeGreaterThan(0);
  });

  it("Adds items cart", async () => {
    render(<App />);
    const user = userEvent.setup();

    const toShop = screen.queryByRole("link", { name: "Shop" });
    await userEvent.click(toShop);
    const buttons = screen.queryAllByRole("button", { name: "Add to Cart" });
    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[2]);
    await userEvent.click(buttons[4]);

    expect(screen.queryAllByRole("button", { name: "In Cart" }).length).toBe(3);
    const toCart = screen.queryByRole("link", { name: "Cart" });
    await userEvent.click(toCart);
    expect(screen.queryAllByTestId("checkout-item").length).toBe(3);
  });
});