
import { CartView } from "../Classes/CartView.js";

const cart = JSON.parse(localStorage.getItem("cart"))
const cartItems = cart.products /* This must be Nothing */

let NewCartView;


console.log(cart)
cartItems.forEach(element => { 
    NewCartView = new CartView(element)
    console.log(NewCartView)
});


if(JSON.parse(localStorage.cart).products.length === 0){
    const emptyTXT = document.querySelector('.empty');
    emptyTXT.innerHTML = "Your cart is empty"
}