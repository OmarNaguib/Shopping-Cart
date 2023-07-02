import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import getData from "./utils/getData";
import "./styles/App.css";

function App() {
  const [items, setItems] = useState(getData());

  const addToCart = (indexToChange) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => {
        if (indexToChange === index)
          return {
            ...item,
            inCart: 1,
          };
        return item;
      })
    );
  };

  const removeFromCart = (indexToChange) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => {
        if (indexToChange === index)
          return {
            ...item,
            inCart: 0,
          };
        return item;
      })
    );
  };

  const increment = (indexToChange) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => {
        if (indexToChange === index)
          return {
            ...item,
            inCart: item.inCart + 1,
          };
        return item;
      })
    );
  };

  const decrement = (indexToChange) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => {
        if (indexToChange === index)
          return {
            ...item,
            inCart: Math.max(item.inCart - 1, 1),
          };
        return item;
      })
    );
  };

  console.log(items);
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/Shop"
            element={<Shop items={items} addToCart={addToCart} />}
          ></Route>
          <Route
            path="/Cart"
            element={
              <Cart
                removeFromCart={removeFromCart}
                increment={increment}
                decrement={decrement}
                items={items}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
