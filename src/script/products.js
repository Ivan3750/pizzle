import { Product } from "../script/Product.js";
let Index = 0
fetch('../data/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for(let element of data){
      let product = new Product(++Index, element.name, element.info, element.price, element.img);
      console.log(product)
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
