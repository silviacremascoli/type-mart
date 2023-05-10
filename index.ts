import products from "./products";

let productName: string = "beanie";

let product = products.filter((product) => {
  return product.name === productName;
})[1];
