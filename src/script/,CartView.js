import {Cart} from "../script/Cart.js"


const DeliveryPrice = 0
const cartBody = document.querySelector('.cart-table__body');



export class CartView{ /* Створює продукти в корзину  */
    elements = []
    constructor(obj){
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


    
    }
    changeAmount(){
        let amount = this.elements[4].value
        let NewTotal =  amount * this.elements[3].innerHTML
         this.elements[5].innerHTML = NewTotal.toFixed(2)
        const cartItems = JSON.parse(localStorage.getItem("cart"))
        console.log(cartItems)
        let found = cartItems.find((e)=> e.id === this.obj.id )
        
        cartItems[cartItems.indexOf(found)].amount = amount
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateTotal()

        
    }
    remove() {
        const cartItems = JSON.parse(localStorage.getItem("cart"))
        let NewCart = cartItems.filter(item => item.id !== this.obj.id)
        this.elements.forEach(element => {
            element.remove()
        })
        localStorage.setItem("cart", JSON.stringify(NewCart));
        
        updateTotal()
    }
}





let totalProductPrice = 0

const totalProductPriceHTML = document.querySelector('.subtotal__box-price');
const totalPriceHTML = document.querySelector('.total__box-price');
function updateTotal(){

    let getData = getCart()
    getData.forEach((elem)=>{
        totalProductPrice +=  elem.amount * Number(elem.price)
        console.log(totalProductPrice)
    })
    totalProductPriceHTML.innerHTML = totalProductPrice.toFixed(2)
    totalPriceHTML.innerHTML = Number(totalProductPrice.toFixed(2)) + DeliveryPrice

}

 

 updateTotal()

 window.addEventListener('storage', (event) => {
    if (event.key === 'cart' && localStorage.cart.length === 2) {
        let EmptyCart = document.createElement("p")
        EmptyCart.innerHTML = "Cart is empty"
        EmptyCart.classList.add("empty-cart-txt") 
        cartBody.append(EmptyCart)
        console.log("корзина пуста")
    }
  });


  




