const cartBody = document.querySelector('.cart-table__body');
import { cartInstance } from "../Classes/Cart.js";
const DeliveryPrice = 0

export class CartView{
    constructor(obj){
        this.elements = []
        this.obj = obj
        
        let bodyProduct = document.createElement("div")
        bodyProduct.classList.add("cart-table__body-product")

        let bodyProductImg = document.createElement("img")
        bodyProductImg.classList.add("cart-table__body-product-img")
        bodyProductImg.src = obj.img

        let bodyProductName = document.createElement("p")
        bodyProductName.classList.add("cart-table__body-product-name")
        bodyProductName.innerHTML = obj.name

        let bodyProductPrice = document.createElement("p")
        bodyProductPrice.classList.add("cart-table__body-product-price")
        bodyProductPrice.innerHTML = obj.price

        let bodyProductAmount = document.createElement("input")
        bodyProductAmount.classList.add("cart-table__body-product-amount")
        bodyProductAmount.value = obj.amount
        bodyProductAmount.addEventListener("change", ()=>{
            this.changeAmount()
            
        })


        let bodyProductTotal = document.createElement("p")
        bodyProductTotal.classList.add("cart-table__body-product-total")
        bodyProductTotal.innerHTML =  obj.price * bodyProductAmount.value

        let bodyProductRemove = document.createElement("button")
        bodyProductRemove.classList.add("cart-table__body-product-remove")
        bodyProductRemove.innerHTML = "x"
        bodyProductRemove.addEventListener("click", () => {
            this.remove();
        });

        cartBody.append(bodyProduct)
        this.elements.push(bodyProduct,bodyProductImg,bodyProductName,bodyProductPrice,bodyProductAmount,bodyProductTotal,bodyProductRemove)
        bodyProduct.append(bodyProductImg,bodyProductName,bodyProductPrice,bodyProductAmount,bodyProductTotal,bodyProductRemove)
 console.log(this)
    }

    changeAmount(){
        let amount = this.elements[4].value
        if(amount == 0){
            this.remove()
        }
        let NewTotal =  amount * Number(this.elements[3].innerHTML)
         this.elements[5].innerHTML = NewTotal.toFixed(2)
        const cart = JSON.parse(localStorage.getItem("cart"))
        let cartItems = cart.products
        console.log(cartItems)
        console.log(this.obj.id)
        let found = cartItems.find((e)=> e.id === this.obj.id)
        cartInstance.changeAmount(this.obj, this.obj.id, amount)
        cartItems[cartItems.indexOf(found)].amount = amount
        updateTotal()
      
    }
    remove() {
        const cart = JSON.parse(localStorage.getItem("cart"))
        let cartItems = cart.products
        let NewCart = cartItems.filter(item => item.id !== this.obj.id)
        this.elements.forEach(element => {
            element.remove()
        })
        cartInstance.removeProduct(NewCart)
        updateTotal()
        this.isEmpty()
    }
    isEmpty(){
        if(JSON.parse(localStorage.cart).products.length === 0){
            const emptyTXT = document.querySelector('.empty');
            emptyTXT.innerHTML = "Your cart is empty"
        }
    }
}

let totalProductPrice = 0

const totalProductPriceHTML = document.querySelector('.subtotal__box-price');
const totalPriceHTML = document.querySelector('.total__box-price');
function updateTotal(){

    const cart = JSON.parse(localStorage.getItem("cart"))
    let cartItems = cart.products
    console.log(cartItems)
    totalProductPrice = 0
    cartItems.forEach((elem)=>{
        totalProductPrice +=  Number(elem.amount) * Number(elem.price)
        totalProductPrice = totalProductPrice.toFixed(2)
        totalProductPrice = Number(totalProductPrice)
        console.log(totalProductPrice)
    })
    totalProductPriceHTML.innerHTML = totalProductPrice
    totalPriceHTML.innerHTML = Number(totalProductPrice) + DeliveryPrice

}

 

 updateTotal()

const removeAllBtn = document.querySelector('.remove-all-btn');

removeAllBtn.addEventListener("click", ()=>{
    const cart = JSON.parse(localStorage.getItem("cart"))
    cart.products = []
    localStorage.setItem("cart", JSON.stringify(cart))
    updateTotal()
    cartBody.innerHTML = `<p class="empty">Your cart is empty</p>`
})

