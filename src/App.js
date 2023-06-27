import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import "./styles/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
