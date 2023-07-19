// Take the operand input
const num1 = parseFloat(prompt(`Enter first number:`));
const num2 = parseFloat(prompt(`Enter second number`));

// Take the operator input
const operator = prompt(`Enter operator (Any one +, -, * ,/)`);


let result;

switch(operator){

    case "+" :
        result = num1+num2
        break;

    case "-" :
        result = num1-num2
        break;
    case "*" :
        result = num1*num2
        break;
    case "/" :
        result = num1/num2
        break;  

        default:
            alert("Invalid Operator")
            console.log("Invalid Operator")
}

alert(`${num1} ${operator} ${num2} =${result}`)

console.log(`${num1} ${operator} ${num2} =${result}`)


