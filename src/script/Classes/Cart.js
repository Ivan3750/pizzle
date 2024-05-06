export let cartInstance


export class Cart{
    constructor(){
        this.products = []
    }
    addProduct(product){
        let indexProduct = this.products.indexOf(product)
        let foundProduct =  this.products.find((e)=> e.id === product.id) 
 console.log(foundProduct)
        if(foundProduct !== undefined){
           /*  let foundProduct = this.products[indexProduct] */
            console.log(foundProduct)
            foundProduct.amount++  
            localStorage.setItem("cart", JSON.stringify(cartInstance))
            console.log("CREATED ++")
        }else{
            console.log("CREATED")
            this.products.push(product)
            localStorage.setItem("cart", JSON.stringify(cartInstance))
        }
    }
    removeProduct(product) {
        /* const index = this.products.indexOf(product);
        console.log(index)
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log("Product removed from cart:", product);
        } else {
            console.log("Product not found in cart:", product);
            console.log(this.products)
        } */
        this.products = product
        localStorage.setItem("cart", JSON.stringify(cartInstance))
    }
    getProducts(){
        return this.products
    }
    changeAmount(product, id, amount){
        let foundProduct = this.products.find((e)=> e.id === product.id)
        foundProduct.amount = amount
        console.log(foundProduct.amount)
        localStorage.setItem("cart", JSON.stringify(cartInstance))


    }
}


window.addEventListener("load", ()=>{
    if(localStorage.cart){
        const restoredInstance = Object.assign(new Cart(), JSON.parse(localStorage.cart));
        
        localStorage.setItem("cart", JSON.stringify(restoredInstance))
        cartInstance = restoredInstance 
    }else{
        cartInstance  = new Cart()
    
        localStorage.setItem("cart", JSON.stringify(cartInstance))
    }
})

