/*-------------------------------- Constants --------------------------------*/
// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll(".button");



/*-------------------------------- Variables --------------------------------*/
//Assigning three variables corresponding to the 3 types of inputs we need to execute a math operation (2 numbers and an operator)
let operand1 = ""; 
let operator = "";
let operand2 = "";


/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");



/*----------------------------- Event Listeners -----------------------------*/
//This shows buttons on display after click
buttons.forEach((button)=>{
    button.addEventListener("click", (event)=>{
        const value = button.textContent; //Were to store the element that is clicked
        // console.log(value);
        // console.log(event.target.innerText);
        // display.innerHTML = event.target.innerText;
        if (value >= "0" && value <= "9") {
            if (!operator) { //We are ensuring that if input is a number/operand and not an operator, then it will be stored and we can continue to input a number
              operand1 += value; //storing the input for our calculations (under the hood variable)
              display.textContent = operand1; //We display the stored input to the display box
            } else { //If the input IS an operator, then that input/number will be stored in the variable "operand2"
              operand2 += value; //The inputs will be added together as a string, allowing us to type multi-digit numbers
              display.textContent = operand2;
            }
          } else if (value === "+" || value === "-" || value === "*" || value === "/") { //If input is not a number and it's an operator (either one of our operators)
            if (!operator && operand1) { //If we have selected an input that was stored as operand1 (not empty) and we HAVEN'T selected an operator yet, the input value will be stored to the operator variable
              operator = value;
              display.textContent = operator;
            }
          } else if (value === "=") { 
            if (operand1 && operator && operand2) { //If we have stored values in the three variables (this is resolving for true), then want to execute the code inside our code block
              const result = calculate(parseFloat(operand1), operator, parseFloat(operand2)); //Storing the result from the math operation after we have all 3 values needed
              display.textContent = result;
              operand1 = result.toString(); //Ensuring to store the result as a string with the toString() method because our display .textContent accepts strings 
              operator = "";
              operand2 = "";
            }
          } else if (value === "C") { //clearing button clears variable values for our math operations and the display
            operand1 = "";
            operator = "";
            operand2 = "";
            display.textContent = "";
          }
        });
      });
      //Used ChatGPT to help learn and understand about switch statements to replace if...else statements
    
/*-------------------------------- Functions --------------------------------*/
function calculate(num1, op, num2) { //Declaring our function with switch statement inside the code block
    switch (op) { //Use of switch statement to replace if...else statements and returning the result from the mathematical operation representing each operator - when the arguements are passed (the 3 values) the operation it will run depends on which "case" it is (here we target the operator itself)
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2; //return statement ends the loop of evaluating for each case value and it becomes the output of our function
      case "*":
        return num1 * num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Error"; //Should the second number user divides by is 0, then return error message
        }
      default:
        return "Error";
    }
  }

