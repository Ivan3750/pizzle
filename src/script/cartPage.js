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
    
    cartBody.innerHTML += `

    <div class="cart-table__body-product">
    <img src="${product.img}" alt="${product.name}" class="cart-table__body-product-img">
    <p class="cart-table__body-product-name">${product.name}</p>
    <p class="cart-table__body-product-price">${product.price} £</p>
    <input type="number" class="cart-table__body-product-amount" min="1" max="10">
    <p class="cart-table__body-product-total">${product.price} £</p>
    <button class="cart-table__body-product-remove">x</button>
    </div>
`;




}
1
