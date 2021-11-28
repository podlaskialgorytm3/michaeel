const buttonX = document.querySelector(".X")
const menu = document.querySelector("div.meniHamburger")
const buttonxx = document.querySelector(".xx")
let kat=0;
buttonX.addEventListener("click", function (){
    kat+=90
    menu.style.left = "0";
    buttonX.style.transform = "rotate("+kat+"deg)"
    buttonX.style.transition = "1s"
})
buttonxx.addEventListener("click",function ()
{
    kat+=90
    menu.style.left = "-20vw"
    buttonX.style.transform = "rotate("+kat+"deg)"
})
