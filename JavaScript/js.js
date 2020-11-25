/*
    Created By Jordan

    Website - https://codingJordan.github.io
    Twitter - https://twitter.com/jordanCoding
    YouTube - https://www.youtube.com/channel/UCpBrGERV1KaIGjsQPz8z2Wg
    GitHub - https://github.com/codingJordan
*/

//Query Selectors
let btnUp = document.querySelector(".countUp");
let btnRst = document.querySelector(".countRst");
let clickCount = document.querySelector(".countNum h1");

//Count up button function.
btnUp.addEventListener("click", () => {
    clickCount.innerHTML++;
});

//Count reset button function.
btnRst.addEventListener("click", () => {
    clickCount.innerHTML = 0;
});
