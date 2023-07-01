import { useState } from "react";
export default function Cards({ data }) {
  const [items, setItems] = useState(data);

  const addTocart = (index) => {
    setItems((prevItems) => {
      console.log(prevItems, "here", index);
      prevItems[index].inCart = true;
      return [...prevItems];
    });
  };

  const cards = items.map((item, index) => (
    <div className="card">
      <img src={item.src} alt="" />
      <div className="name">{item.name}</div>
      <div className="price">£{item.price}</div>
      <button onClick={addTocart.bind(null, index)}>Add to Cart</button>
      {item.inCart ? "incart" : "not"}
    </div>
  ));
  return <div className="cards">{cards}</div>;
}
