let result = 0;
const firstNumber = + prompt ('Enter your first number');
const secondNumber = + prompt ('Enter your second number');
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('incorrect number')
}
const operation =  prompt ('Enter your operation (+ - * /)');
if (operation!== '-' && operation!== '+' && operation!== '/' && operation!== '*') {
    alert('incorrect operation')
} else if (operation === '+') {
    result = firstNumber + secondNumber
    alert (`Your result is ${result}.`);
}else if (operation === '-') {
    result = firstNumber - secondNumber
    alert (`Your result is ${result}.`);
}else if (operation === '*') {
    result = firstNumber * secondNumber
    alert (`Your result is ${result}.`);
}else if (operation === '/') {
    result = firstNumber / secondNumber
    alert (`Your result is ${result}.`);
} else {
    alert('This operation is not exist');
}