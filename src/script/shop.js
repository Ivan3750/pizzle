import { Cart } from "../script/Cart.js";
const  headerCart = document.querySelector('.header__cart');

headerCart.addEventListener('click', () => {
    localStorage.getItem(JSON.parse("cart"))
    const NewCart = new Cart(JSON.parse(localStorage.getItem("cart")))

    console.log(NewCart)
})

