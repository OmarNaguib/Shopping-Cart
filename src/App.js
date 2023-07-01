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

  const addTocart = (index) => {
    setItems((prevItems) => {
      prevItems[index].inCart = true;
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
            element={<Shop items={items} addTocart={addTocart} />}
          ></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
