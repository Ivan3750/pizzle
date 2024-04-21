class PublishCart{
    
    constructor(product){
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
        bodyProductAmount.value = 1
        
        
        let bodyProductTotal = document.createElement("p")
        bodyProductTotal.classList.add("cart-table__body-product-total")
        bodyProductTotal.innerHTML =  product.price * bodyProductAmount.value
        
        let bodyProductRemove = document.createElement("button")
        bodyProductRemove.classList.add("cart-table__body-product-remove")
        bodyProductRemove.innerHTML = "x"
        
        cartBody.append(bodyProduct)
        bodyProduct.append(bodyProductImg,bodyProductName,bodyProductPrice,bodyProductAmount,bodyProductTotal,bodyProductRemove)
        
        
        
    }

}