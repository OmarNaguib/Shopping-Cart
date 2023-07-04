import React from "react";
import { queryAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("App Integration test", () => {
  it("Displays items in shop", async () => {
    render(<App />);
    const user = userEvent.setup();

    const toShop = screen.queryByRole("link", { name: "Shop" });
    await act(async () => {
      await user.click(toShop);
    });

    expect(screen.queryAllByTestId("card").length).toBeGreaterThan(0);
  });

  it("Adds items cart", async () => {
    render(<App />);
    const user = userEvent.setup();

    const toShop = screen.queryByRole("link", { name: "Shop" });
    await act(async () => {
      await user.click(toShop);
    });
    const buttons = screen.queryAllByRole("button", { name: "Add to Cart" });
    await act(async () => {
      await user.click(buttons[0]);
      await user.click(buttons[2]);
      await user.click(buttons[4]);
    });

    expect(screen.queryAllByRole("button", { name: "In Cart" }).length).toBe(3);
    const toCart = screen.queryByRole("link", { name: "Cart" });
    await act(async () => {
      await user.click(toCart);
    });

    expect(screen.queryAllByTestId("checkout-item").length).toBe(3);
  });

  it("Cart interactes soundly: increments, decrements, calculates subtotal", async () => {
    render(<App />);
    const user = userEvent.setup();

    const toShop = screen.queryByRole("link", { name: "Shop" });
    await act(async () => {
      await user.click(toShop);
    });
    const buttons = screen.queryAllByRole("button", { name: "Add to Cart" });
    await act(async () => {
      await user.click(buttons[0]);
    });

    const toCart = screen.queryByRole("link", { name: "Cart" });
    await act(async () => {
      await user.click(toCart);
    });

    await act(async () => {
      await user.click(screen.getByRole("button", { name: "+" }));
      await user.click(screen.getByRole("button", { name: "+" }));
      await user.click(screen.getByRole("button", { name: "-" }));
    });

    expect(screen.getByTestId("number").textContent).toBe("2");
    expect(screen.getByTestId("subtotal").textContent).toBe(
      "£" +
        (
          screen.getByTestId("price").textContent.slice(1) *
          screen.getByTestId("number").textContent
        ).toFixed(2)
    );
  });

  it("Cart interactes soundly: deletes", async () => {
    render(<App />);
    const user = userEvent.setup();

    const toShop = screen.queryByRole("link", { name: "Shop" });
    await act(async () => {
      await user.click(toShop);
    });

    const buttons = screen.queryAllByRole("button", { name: "Add to Cart" });
    await act(async () => {
      await user.click(buttons[0]);
      await user.click(buttons[1]);
    });
    const toCart = screen.queryByRole("link", { name: "Cart" });
    await act(async () => {
      await user.click(toCart);
    });

    await act(async () => {
      await user.click(screen.getAllByRole("button", { name: "delete" })[0]);
    });

    expect(screen.queryAllByTestId("checkout-item").length).toBe(1);
  });
});
