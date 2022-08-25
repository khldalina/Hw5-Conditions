const firstNumber = + prompt ('Enter your first number');
const operation =  prompt ('Enter your operation')
const secondNumber = + prompt ('Enter your second number');
let result = 0;
if (firstNumber) {
    if (operation === '+')
        result = firstNumber + secondNumber
    else if (operation === '-')
        result = firstNumber - secondNumber
    else if (operation === '*')
        result = firstNumber * secondNumber
    else if (operation === '/')
        result = firstNumber / secondNumber
    const sum = `Your result is ${result}`;
    if (!isNaN(firstNumber)) {
    }
    if (!isNaN(secondNumber)) {
    }
    alert(sum)
} else {
    alert('This operation is not exist')
}