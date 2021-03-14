let btnUp = document.querySelector(".countUp");
let btnRst = document.querySelector(".countRst");
let clickCount = document.querySelector(".countNum h1");
let numberCount = document.querySelector(".count")

btnUp.addEventListener("click", () => {
    numberCount.innerHTML++;
    if(numberCount.innerHTML == 1){
        numberCount.classList.add('countNum', ':after')
    } else if(numberCount.innerHTML > 1){
        numberCount.classList.remove('countNum', ':after')
        numberCount.classList.add('countNumP', ':after')
    }
});

btnRst.addEventListener("click", () => {
    numberCount.innerHTML = 0;
    numberCount.className = "";
});