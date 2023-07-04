import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Integration test", () => {
  it("Displays items in shop", async () => {
    render(<App />);
    const user = userEvent.setup();

    const toShop = screen.queryByRole("link", { name: "Shop" });
    await userEvent.click(toShop);

    expect(screen.queryAllByTestId("card").length).toBeGreaterThan(0);
  });
});
