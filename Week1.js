const ps=require("prompt-sync");
const prompt = ps();

const num1 = parseInt(prompt("Enter a number:"));
const num2 = parseInt(prompt("Enter a number:"));
const sum = num1 + num2;
const sub = num1-num2;
const mlp = num1*num2;
const divide = num1/num2;

console.log("The sum is: "+sum);
console.log("The substraction is: "+sub);
console.log("The multiplication is: "+mlp);
console.log("The division is: "+divide);