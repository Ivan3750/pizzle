const form = document.querySelector('.form');
const orderPlaced = document.querySelector('.order__placed');
const orderSection = document.querySelector('.order__section');
const totalNUM = document.querySelector('.total-num');

    let total = sessionStorage.getItem("total")
    totalNUM.innerHTML = total + " £"


form.addEventListener("submit", ()=>{
    event.preventDefault();
    let fullname = document.querySelector('.fullname-input').value;
    let adress = document.querySelector('.adress-input').value;
    let email = document.querySelector('.email-input').value;
    let phone = document.querySelector('.phone-input').value;
    let note = document.querySelector('.note-input').value;
    if(fullname.length < 7){
        showMassege("Full name is too short")
    }
    else if(email.length < 7 && email.includes("@")){
        showMassege("Incorrect email")
    }
    else if(phone.length < 10){
        showMassege("Incorrect phone")
    }
    else if(adress.length < 15){
        showMassege("Incorrect adress")

    }else{
        orderPlaced.style.display = "flex"
        orderSection.style.display = "none"
    }

})

function showMassege(massegeToShow){
    let massege = document.querySelector('.massege');
    let massegeTXT = document.querySelector('.massege-txt');
    massegeTXT.innerHTML = massegeToShow
    massege.classList.add("show")
    setTimeout(()=>{
        massege.classList.remove("show")
    },3000)
}
