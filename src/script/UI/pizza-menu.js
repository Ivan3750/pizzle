const menuPizza = document.querySelector('.food-menu__pizza');


let positionY = 0;
let standard = 500

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 2300 && window.scrollY < 2700 ){
        positionY = ((window.scrollY - standard) - 2300)
        menuPizza.style.transform = `translateY(${positionY/2}px)`
    }
    
}) 


/* When I repload page come error */

window.addEventListener("load", ()=>{

    if(window.scrollY > 2600 ){
        menuPizza.style.transform = `translateY(-50px)`
    }
})

