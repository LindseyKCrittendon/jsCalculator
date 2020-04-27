
// const firstNumber = document.querySelector('#firstInput');
// console.log('this should be the first input');

// const secondNumber = document.querySelector('#secondInput');
// console.log('this should be the second input');

// const firstNumberInput = firstNumber.value;
// console.log(firstNumberInput, ' this should be the first input');

// const secondNumberInput = secondNumber.value;




const additionButtonClick = document.querySelector("#addition");
additionButtonClick.addEventListener("click", function(){
// consolelog('you clicked the addition button');
const firstNumber = document.querySelector('#firstInput');
const secondNumber = document.querySelector('#secondInput');
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
let firstNumberInt = parseInt(firstNumberInput);
let secondNumberInt = parseInt(secondNumberInput);
document.querySelector("#output").innerHTML = firstNumberInt + secondNumberInt;
firstNumber.value = "";
secondNumber.value = "";
});

const subtractButtonClick = document.querySelector("#subtraction");
subtractButtonClick.addEventListener("click", function(){
// consolelog('you clicked the subtraction button');
const firstNumber = document.querySelector('#firstInput');
const secondNumber = document.querySelector('#secondInput');
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
let firstNumberInt = parseInt(firstNumberInput);
let secondNumberInt = parseInt(secondNumberInput);
document.querySelector("#output").innerHTML = firstNumberInt - secondNumberInt;
firstNumber.value = "";
secondNumber.value = "";
});

const multiplyButtonClick = document.querySelector("#multiply");
multiplyButtonClick.addEventListener("click", function(){
// consolelog('you clicked muliplication button');
const firstNumber = document.querySelector('#firstInput');
const secondNumber = document.querySelector('#secondInput');
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
let firstNumberInt = parseInt(firstNumberInput);
let secondNumberInt = parseInt(secondNumberInput);
document.querySelector("#output").innerHTML = firstNumberInt * secondNumberInt;
firstNumber.value = "";
secondNumber.value = "";
});

const divideButtonClick = document.querySelector("#divide");
divideButtonClick.addEventListener("click", function(){
// consolelog('you clicked the division button');
const firstNumber = document.querySelector('#firstInput');
const secondNumber = document.querySelector('#secondInput');
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
let firstNumberInt = parseInt(firstNumberInput);
let secondNumberInt = parseInt(secondNumberInput);
document.querySelector("#output").innerHTML = firstNumberInt / secondNumberInt;
firstNumber.value = "";
secondNumber.value = "";
});

