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

  const addToCart = (index) => {
    setItems((prevItems) => {
      prevItems[index].inCart = 1;
      return [...prevItems];
    });
  };

  const removeFromCart = (index) => {
    setItems((prevItems) => {
      prevItems[index].inCart = 0;
      return [...prevItems];
    });
  };

  const increment = (index) => {
    setItems((prevItems) => {
      prevItems[index].inCart += 1;
      return [...prevItems];
    });
  };

  const decrement = (index) => {
    setItems((prevItems) => {
      prevItems[index].inCart -= 1;
      return [...prevItems];
    });
  };
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
