import products from "./products";

let productName: string = "shirt";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "3763 Farnum Road, 10016 New York";

const product = products.filter((product) => {
  return product.name === productName;
})[0];

if (product.preOrder) {
  console.log(
    `This product can be pre-ordered. We will notify you when it's on the way.`
  );
}

if (product.price >= 25) {
  shipping = 0;
  console.log(`Hurray! You get free shipping for this product.`);
} else {
  shipping = 5;
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(`
Product name: ${productName}
Address: ${shippingAddress}
Price: $${product.price}
Tax total: $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total: $${total.toFixed(2)}
`);
