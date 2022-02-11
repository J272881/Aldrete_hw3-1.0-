let input1 = window.prompt("Enter an interger: ");
let num1 = Number(input1);
let input2 = window.prompt("Enter an interger: ");
let num2 = Number(input2);

sum = num1 + num2;
subtraction = num1 - num2;
multiplication = num1 * num2;
division = num1 / num2;
modulo = num1 % num2;

console.log(num1+"+"+num2 + '=' +sum);
console.log(num1+"-"+num2 + '=' +subtraction);
console.log(num1+"*"+num2 + '=' +multiplication);
console.log(num1+"/"+num2 + '=' +division);
console.log(num1+"%"+num2 + '=' +modulo);