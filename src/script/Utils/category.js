const categoryElements = document.querySelectorAll('.shop__sidebar__category__list-element');
const productsMain = document.querySelector('.shop__products__main');


import { Product } from "../Classes/Product.js";

fetch('../data/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      categoryElements.forEach((e)=>{
          e.addEventListener("click", ()=>{
              productsMain.innerHTML = ""
              if(e.innerHTML !== "All"){
                  for(let element of data){
                    for (let i = 0; i < element.category.length; i++) {
                        if(e.innerHTML.trim() == element.category[i]){
                            new Product(element.id, element.name, 1, element.info, element.price, element.img); /*  Створюємо продукт та публікуємо на сайт */
                    }

              }
            }
        }else{
            for(let element of data){
                new Product(element.id, element.name, 1, element.info, element.price, element.img); /*  Створюємо продукт та публікуємо на сайт */
                
            }
        }
        })
    })
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


