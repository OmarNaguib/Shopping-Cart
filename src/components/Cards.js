export default function Cards({ data }) {
  console.log(data);

  const cards = data.map((item) => (
    <div className="card">
      <img src={item.src} alt="" />
      <div className="name">{item.name}</div>
      <div className="price">£{item.price}</div>
    </div>
  ));
  return <div className="cards">{cards}</div>;
}
