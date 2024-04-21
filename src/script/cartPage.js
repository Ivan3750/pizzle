const DeliveryPrice = 0


const cartItems = JSON.parse(localStorage.getItem("cart"))
/* function getProductsFromCart(){
    return cartItems
}
console.log(getProductsFromCart()) */

/* {
    "name": "BBQ Pizza TinTin",
    "info": "Gourmet burger with arugula, feta cheese, quail eggs and...",
    "price": "10.99",
    "img": "../assets/images/products/pizza_slide_4.png"
} */


const cartBody = document.querySelector('.cart-table__body');
for(let product of cartItems){
    console.log(cartItems)


let bodyProduct = document.createElement("div")
bodyProduct.classList.add("cart-table__body-product")

let bodyProductImg = document.createElement("img")
bodyProductImg.classList.add("cart-table__body-product-img")
bodyProductImg.src = product.img

let bodyProductName = document.createElement("p")
bodyProductName.classList.add("cart-table__body-product-name")
bodyProductName.innerHTML = product.name

let bodyProductPrice = document.createElement("p")
bodyProductPrice.classList.add("cart-table__body-product-price")
bodyProductPrice.innerHTML = product.price

let bodyProductAmount = document.createElement("input")
bodyProductAmount.classList.add("cart-table__body-product-amount")
bodyProductAmount.id = product.id
bodyProductAmount.value = 1


let bodyProductTotal = document.createElement("p")
bodyProductTotal.classList.add("cart-table__body-product-total")
bodyProductAmount.id = `${product.id}T`
bodyProductTotal.innerHTML =  product.price * bodyProductAmount.value

let bodyProductRemove = document.createElement("button")
bodyProductRemove.classList.add("cart-table__body-product-remove")
bodyProductRemove.innerHTML = "x"

cartBody.append(bodyProduct)
bodyProduct.append(bodyProductImg,bodyProductName,bodyProductPrice,bodyProductAmount,bodyProductTotal,bodyProductRemove)


}


function loadTotalPrice(id){
    bodyProductTotal.innerHTML =  product.price * bodyProductAmount.value
    const found = cartItems.find((element) => element.id === 1);
    let InputHTML = document.getElementById(id)
    let TotalHTML = document.getElementById(`${product.id}T`)
    TotalHTML.innerHTML = found.price * InputHTML.value
    
}


console.log(found);


const totalPriceBox = document.querySelector('.total__box-price');
const shippingPriceBox = document.querySelector('.shipping__box-price');
const subTotalBox = document.querySelector('.subtotal__box-price');
let Total = 0




totalPriceBox.innerHTML = DeliveryPrice + Total 
shippingPriceBox.innerHTML = DeliveryPrice
subTotalBox.innerHTML = Total