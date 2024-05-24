import { Product } from "../Classes/Product.js";

const searchInput = document.querySelector('.shop__sidebar__searchbar-input');
const searchBtn = document.querySelector('.shop__sidebar__searchbar-btn');
const productsMain = document.querySelector('.shop__products__main');
let searchInputValue
function getSearch(){
    searchInputValue = searchInput.value
}


const data =  require("../../data/products.json")
/* fetch("../data/products.json")
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => { */
    
    searchBtn.addEventListener("click", ()=>{
        search()
    })
    window.addEventListener("keydown", ()=>{
        if(event.key === "Enter"){
            search()
        }
    })
    function search(){
        productsMain.innerHTML = ""
        console.log(productsMain.innerHTML.trim() === '')
        for (let [index, element] of data.entries()){
            if(element.name.toLowerCase().includes(searchInput.value)){
                console.log("We found this" + element)
               let product = new Product(element.id, element.name, 1, element.info, element.price, element.img); /*  Створюємо продукт та публікуємо на сайт */
                console.log(product.name)
            }else{
                if(productsMain.innerHTML.trim() === '' && index === data.length - 1){
                    productsMain.innerHTML = "Nothing"
                }

            }
        }
    }
   

/*   })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }); */

