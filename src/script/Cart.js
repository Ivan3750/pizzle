
export class Cart{
    constructor(){
        this.products = []
    }

    addProduct(product){
        console.log("Product added to cart", product);
        this.products.push(product);
    }
    
    removeProduct(product) {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log("Product removed from cart:", product);
        } else {
            console.log("Product not found in cart:", product);
        }
    }

    getCartItems() {
        return this.products;
    }
}