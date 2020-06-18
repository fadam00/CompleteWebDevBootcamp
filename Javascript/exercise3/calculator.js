//Calculator Exercise
//Prompts user for 2 numbers and executes mathematical calculations

const num1 = parseInt(prompt("Hi there, enter your first number", "Enter number here"));
const num2 = parseInt(prompt("Now, enter your second number", "Enter number here"));
const math = prompt("What would you like to do with them?", "Enter Add, Subtract, Multiply, or Divide");

if (math === "Add"){

    alert (`Here's the result: ${num1 + num2}!`)

} else if (math === "Subtract") {

    alert (`Here's the result: ${num1 - num2}!`)

} else if (math === "Multiply") {

    alert (`Here's the result: ${num1 * num2}!`)

} else if (math === "Divide"){

    alert (`Here's the result: ${num1 / num2}!`)

}

