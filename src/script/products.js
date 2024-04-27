import { Product } from "../script/Product.js";
let Index = 0 
localStorage.setItem("lastIndex", Index)

fetch('../data/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for(let element of data){
      new Product(element.id, element.name, 1, element.info, element.price, element.img); /*  Створюємо продукт та публікуємо на сайт */
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


