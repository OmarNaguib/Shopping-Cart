import removeExtension from "./removeExtension";
// get all image sources from the asset folder, calculate their name, add a chosen attribute
function importAll(r) {
  return r.keys().map((item, index) => {
    const attributes = removeExtension(item.replace("./", "")).split("_");
    return {
      src: r(item),
      chosen: false,
      name: attributes[1],
      price: attributes[2],
      inCart: false,
    };
  });
}
function getData() {
  return importAll(
    require.context("../assets/items/", false, /\.(png|jpe?g|svg|webp)$/)
  );
}

export default getData;
