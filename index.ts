import products from "./products";

let productName: string = "fanny pack";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "592 Five Points, 20151 Maryland";

let product = products.filter((product) => {
  return product.name === productName;
})[0];

function preOrder(product) {
  if (product.preOrder === true) {
    console.log(
      `This product can be pre-ordered. We will notify you when it's on the way`
    );
  } else {
    null;
  }
}

function freeShipping(product) {
  if (product.price >= 25) {
    shipping = 0;
    console.log(`Hurray! You get free shipping for this product.`);
  } else {
    shipping = 5;
  }
}

console.log(product);
preOrder(product);
freeShipping(product);
