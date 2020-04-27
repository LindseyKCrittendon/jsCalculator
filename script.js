
// const firstNumber = document.querySelector('#firstInput');
// console.log('this should be the first input');

// const secondNumber = document.querySelector('#secondInput');
// console.log('this should be the second input');

// const firstNumberInput = firstNumber.value;
// console.log(firstNumberInput, ' this should be the first input');

// const secondNumberInput = secondNumber.value;




const additionButtonClick = document.querySelector("#addition");
const firstNumber = document.querySelector('#firstInput');
const secondNumber = document.querySelector('#secondInput');
const subtractButtonClick = document.querySelector("#subtraction");
const multiplyButtonClick = document.querySelector("#multiply");
const divideButtonClick = document.querySelector("#divide");



additionButtonClick.addEventListener("click", function(){
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
document.querySelector("#output").innerHTML = parseInt(firstNumberInput) + parseInt(secondNumberInput);
firstNumber.value = "";
secondNumber.value = "";
});


subtractButtonClick.addEventListener("click", function(){
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
document.querySelector("#output").innerHTML = parseInt(firstNumberInput) - parseInt(secondNumberInput);
firstNumber.value = "";
secondNumber.value = "";
});


multiplyButtonClick.addEventListener("click", function(){
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
document.querySelector("#output").innerHTML = parseInt(firstNumberInput) * parseInt(secondNumberInput);
firstNumber.value = "";
secondNumber.value = "";
});


divideButtonClick.addEventListener("click", function(){
let firstNumberInput = firstNumber.value;
let secondNumberInput = secondNumber.value;
document.querySelector("#output").innerHTML = parseInt(firstNumberInput) / parseInt(secondNumberInput);
firstNumber.value = "";
secondNumber.value = "";
});

