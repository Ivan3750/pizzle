const productTitle = document.querySelector('.product__details-title');
const productPrice = document.querySelector('.product__details-price');
const productWeight = document.querySelector('#product-weight');
const productCategory = document.querySelector('#product-category');
const productSize = document.querySelector('#product-size');
const productImg = document.querySelector('.product-img');
const productButtonSize = document.querySelectorAll('.product-btn-size');

let sizeIndex = 0

activeProductID = sessionStorage.activeProduct
if (activeProductID) {
      this.activeProductID = JSON.parse(activeProductID)
}
let activeProduct;

fetch('../data/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
      activeProduct = data.find((product)=> product.id === activeProductID)
      let{weight} = activeProduct
      function reploadInfoProduct(){
          document.title = activeProduct.name
         productTitle.innerHTML = activeProduct.name
         productPrice.innerHTML = `£ ${activeProduct.price}`
         productWeight.innerHTML = activeProduct.weight[sizeIndex]
         productCategory.innerHTML = activeProduct.category
         if(productSize.weight != "none"){
             productSize.innerHTML = activeProduct.size[sizeIndex]
         }else{
            productSize.innerHTML = "-"
         }
         productImg.src = activeProduct.img
         productTitle.innerHTML = activeProduct.name

      }
      reploadInfoProduct()
      
      productButtonSize.forEach((btn)=>{
        btn.addEventListener("click", ()=>{

        productButtonSize.forEach((btn) => btn.classList.remove("active"))


        console.log(sizeIndex)
          switch(btn.innerHTML){
                case("Large"): 
                    sizeIndex = 2
                    if(btn.classList.contains("active")){
                        btn.classList.remove("active")
                    }else{
                        btn.classList.add("active")
                    }
                    reploadInfoProduct()
                    break;
                case("Medium"):
                    sizeIndex = 1
                    if(btn.classList.contains("active")){
                        btn.classList.remove("active")
                    }else{
                        btn.classList.add("active")
                    }
                    reploadInfoProduct()
                    break;
                case("Small"):
                    sizeIndex = 0
                    if(btn.classList.contains("active")){
                        btn.classList.remove("active")
                    }else{
                        btn.classList.add("active")
                    }
                    reploadInfoProduct()
                    break;
              
          } 
        })
    })


   





















  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });




