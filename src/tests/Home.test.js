import React from "react";
import { render } from "@testing-library/react";
import Home from "../components/Home";
import { HashRouter, Route, Routes } from "react-router-dom";

describe("Home page", () => {
  it("renders correctly", () => {
    const { container } = render(
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
