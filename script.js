
// const firstNumber = document.querySelector('#firstInput');
// console.log('this should be the first input');

// const secondNumber = document.querySelector('#secondInput');
// console.log('this should be the second input');

// const firstNumberInput = firstNumber.value;
// console.log(firstNumberInput, ' this should be the first input');

// const secondNumberInput = secondNumber.value;




const additionButtonClick = document.querySelector("#addition");
additionButtonClick.addEventListener("click", function(){
const firstNumber = document.querySelector('#firstInput');
const secondNumber = document.querySelector('#secondInput');
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
document.querySelector("#output").innerHTML = parseInt(firstNumberInput) + parseInt(secondNumberInput);
firstNumber.value = "";
secondNumber.value = "";
});

const subtractButtonClick = document.querySelector("#subtraction");
subtractButtonClick.addEventListener("click", function(){
const firstNumber = document.querySelector('#firstInput');
const secondNumber = document.querySelector('#secondInput');
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
document.querySelector("#output").innerHTML = parseInt(firstNumberInput) - parseInt(secondNumberInput);
firstNumber.value = "";
secondNumber.value = "";
});

const multiplyButtonClick = document.querySelector("#multiply");
multiplyButtonClick.addEventListener("click", function(){
const firstNumber = document.querySelector('#firstInput');
const secondNumber = document.querySelector('#secondInput');
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
document.querySelector("#output").innerHTML = parseInt(firstNumberInput) * parseInt(secondNumberInput);
firstNumber.value = "";
secondNumber.value = "";
});

const divideButtonClick = document.querySelector("#divide");
divideButtonClick.addEventListener("click", function(){
const firstNumber = document.querySelector('#firstInput');
const secondNumber = document.querySelector('#secondInput');
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
document.querySelector("#output").innerHTML = parseInt(firstNumberInput) / parseInt(secondNumberInput);
firstNumber.value = "";
secondNumber.value = "";
});

