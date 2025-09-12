let num1, num2;

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    if(num2 === 0){
        return "cannot divide by zero"
    }
    return num1 / num2;
}

let no1 = prompt("enter no: ");
console.log(no1);