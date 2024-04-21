import { Cart } from "../script/Cart.js";
const NewCart = new Cart

const productsBlock = document.querySelector('.shop__products__main');
export class Product{
    constructor(name, info, price, img){
        this.name = name
        this.info = info
        this.price = price
        this.img = img

        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
        

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
        productBtn.addEventListener("click", () => {
            NewCart.addProduct(this)
            console.log(NewCart.getCartItems())

        })
        productsBlock.append(productCard)
        productCard.append(productImg,productName,productInfo,productPrice,productBtn)

    }
    
  


}


