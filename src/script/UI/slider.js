
$(document).ready(function(){
    $('.slick-slider').slick({
      prevArrow: '<img src="../assets/images/home/prev.svg" alt=""class="slick-prev" >',
      nextArrow: '<img src="../assets/images/home/next.svg" alt="" class="slick-next">',
/*       nextArrow: '<button type="button" class="slick-next"><img src="../assets/images/home/next.svg" alt=""></button>',
 */  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
  })
  ;

window.addEventListener("load", ()=>{
    const slickPrev = document.querySelector('.slick-prev');
    const slickNext = document.querySelector('.slick-next');
    slickPrev.addEventListener("mouseover", () => {
        slickPrev.src = "../assets/images/home/prevActive.svg"

    
    });
    slickPrev.addEventListener("mouseout", () => {
        slickPrev.src = "../assets/images/home/prev.svg";
    });
    
    slickNext.addEventListener("mouseover", () => {
        slickNext.src = "../assets/images/home/nextActive.svg"
        
    });
    slickNext.addEventListener("mouseout", () => {
        slickNext.src = "../assets/images/home/next.svg"
        
    });
})
  