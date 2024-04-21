import { Product } from "../script/Product.js";

fetch('../data/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for(let element of data){
      let product = new Product(element.name, element.info, element.price, element.img);
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
