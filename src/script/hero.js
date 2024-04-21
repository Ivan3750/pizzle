const pizzaUp = document.querySelector('.hero__right-pizza-1');
const pizzaDown = document.querySelector('.hero__right-pizza-2');
const pizzaPosition = {
    up:[-214.4,30.6286],
    down:[-208.4,69.3333]
} 

window.addEventListener("scroll", ()=>{

         pizzaUp.style.transform = `translate(-${-window.scrollY - pizzaPosition.up[0] }px,${window.scrollY/7 - pizzaPosition.up[1]}px)`
           pizzaDown.style.transform = `translate(-${-window.scrollY - pizzaPosition.down[0] }px,${pizzaPosition.down[1] - window.scrollY/3}px)`
       


    if(window.scrollY > 300){
        pizzaUp.style.transform = `translate(0px,0px)`
        pizzaDown.style.transform = `translate(0px,0px)`
    }
})





