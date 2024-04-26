import { Product } from "../script/Product.js";
let Index = 0 /* You must change */

fetch('../data/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for(let element of data){
      let product = new Product(1, element.name, element.info, element.price, element.img, Index++); /*  Створюємо продукт та публікуємо на сайт */
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });