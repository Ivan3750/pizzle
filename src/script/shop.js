/* const searchInput = document.querySelector('.shop__sidebar__searchbar-input');
const searchBtn = document.querySelector('.shop__sidebar__searchbar-btn');
const productsMain = document.querySelector('.shop__products__main');
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
    let Index = 0
    for(let element of data){
      console.log(element.img)
/*       let product = new Product(Index, element.name, element.amount, element.info, element.price, element.img); /*  Створюємо продукт та публікуємо на сайт */
 */    }
    

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }); */