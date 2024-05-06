import {Cart} from "../Classes/Cart.js"
import {cartInstance} from "../Classes/Cart.js"

export function loadProductModal() {
    const modalBlock = document.querySelector('.modal-product-info-block');
    const modalProductName = document.querySelector('.modal-product-name');
    const modalProductInfo = document.querySelector('.modal-product-info');
    const modalProductPrice = document.querySelector('.modal-product-price');
    const modalProductImg = document.querySelector(".modal-product-img");
    const modalProductBTN = document.querySelector(".modal-product-add");
    const productButtonSize = document.querySelectorAll('.product-btn-size');
    const cartProductNumber = document.querySelector('.products-number');

    const inputNumber = document.querySelector('.input-number');
    const inputMinus = document.querySelector('.input-minus');
    const inputPlus = document.querySelector('.input-plus');
  
    let sizeIndex = 0;
    let amount = 1;
    let activeProduct;
  
    const activeProductID = sessionStorage.activeProduct;
    console.log(activeProductID)
   /*  if (activeProductID) {
      activeProductID = JSON.parse(activeProductID);
    } */
  
    fetch('../data/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
          console.log(data)
        activeProduct = data.find((product) => product.id == activeProductID);
        modalProductName.innerHTML = activeProduct.name;
        modalProductInfo.innerHTML = activeProduct.info;
        modalProductPrice.innerHTML = ` £ ${(activeProduct.price * amount).toFixed(2)}`;
        modalProductImg.src = activeProduct.img;
        modalProductBTN.addEventListener("click", ()=>{
        let productObj = {}
        productObj.amount = amount
        productObj.id = activeProduct.id 
        productObj.name = activeProduct.name
        productObj.info = activeProduct.info
        productObj.price = (activeProduct.price * amount).toFixed(2)
        productObj.img = activeProduct.img
        productObj.size = "Medium"
        productObj.weight = "0g"


            console.log(cartInstance)
            cartInstance.addProduct(productObj)
            cartProductNumber.innerHTML = JSON.parse(localStorage.cart).products.length
            modalBlock.classList.remove("show")
    

        })
  
        inputMinus.addEventListener("click", () => {
          if (amount > 0) {
            amount--;
          }
          inputNumber.innerHTML = amount;
          modalProductPrice.innerHTML = ` £ ${activeProduct.price * amount}`;
        });
  
        inputPlus.addEventListener("click", () => {
          amount++;
          inputNumber.innerHTML = amount;
          modalProductPrice.innerHTML = ` £ ${activeProduct.price * amount}`;
        });
  
        productButtonSize.forEach((btn) => {
          btn.addEventListener("click", () => {
            productButtonSize.forEach((btn) => btn.classList.remove("active"));
            switch (btn.innerHTML) {
              case ("Large"):
                sizeIndex = 2;
                break;
              case ("Medium"):
                sizeIndex = 1;
                break;
              case ("Small"):
                sizeIndex = 0;
                break;
            }
            if (btn.classList.contains("active")) {
              btn.classList.remove("active");
            } else {
              btn.classList.add("active");
            }
          });
        });
      })

      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  