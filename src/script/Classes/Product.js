


/**
 *
 *
 * @class Product 
 * This class is used to create a product card in Shop page
 */
/* .modal-product-info-block{
 */

    const modalBlock = document.querySelector('.modal-product-info-block');

import { Cart } from "./Cart.js";
import { cartInstance } from "./Cart.js";
import { loadProductModal } from "../Utils/modal.js";
const cartProductNumber = document.querySelector('.products-number');

/* import {Cart} from "../script/Cart.js"
 */
const productsBlock = document.querySelector('.shop__products__main');

export class Product{
    constructor(id,name,amount,info,price,img,size, weight){
        this.id = id
        this.name = name
        this.amount = amount
        this.info = info
        this.price = price
        this.img = img
        this.size = size
        this.weight = weight



        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
        /* productCard.addEventListener("click", (event)  =>{
            window.location.href = "../pages/product.html"
            sessionStorage.setItem("activeProduct", this.id)
            event.stopPropagation()
        })  */

        const productName = document.createElement("h4")
        productName.classList.add("product-name")
        productName.innerHTML = this.name
        

        const productInfo = document.createElement("p")
        productInfo.classList.add("product-info")
        productInfo.innerHTML = this.info
        
        const productPrice = document.createElement("p")
        productPrice.classList.add("product-price")
        productPrice.innerHTML = `${this.price} £`

        const productImg = document.createElement("img")
        productImg.classList.add("product-img")
        productImg.src = this.img
        productImg.style.width = `224px`
        productImg.style.style = `224px`

        const productBtn = document.createElement("button")
        productBtn.classList.add("product-btn")
        productBtn.innerHTML = "add to cart"
        productBtn.addEventListener("click", ()=>{
            modalBlock.classList.add("show")
            sessionStorage.setItem("activeProduct", this.id)
            loadProductModal()
/*             cartInstance.addProduct(this)             
 */           /*  console.log(modalBlock)
            console.log(cartInstance) */
            cartProductNumber.innerHTML = JSON.parse(localStorage.cart).products.length


        })


        productsBlock.append(productCard)
        productCard.append(productImg,productName,productInfo,productPrice,productBtn)
    }
}





cartProductNumber.innerHTML = JSON.parse(localStorage.cart).products.length
