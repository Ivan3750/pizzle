const mobileMenuImg = document.querySelector('.mobile-menu');
const closeMobile = document.querySelector('.closeMobile-modal');
const headerNav = document.querySelector('.header__nav');
mobileMenuImg.addEventListener("click", ()=>{
    headerNav.classList.add("mobileMode")
    closeMobile.classList.add("show")
})
closeMobile.addEventListener("click", ()=>{
    headerNav.classList.remove("mobileMode")
    closeMobile.classList.remove("show")
})