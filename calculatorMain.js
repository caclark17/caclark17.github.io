/*INPUT: User enters in two numbers and an arithmetic operator.
*Enters in the answer to the math problem
*PROCESSING: The numbers are added together, multiplied, subtracted, or divided
*OUTPUT: The user is told if they are correct or incorrect
*/

function solveProblem() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let operator = parseFloat(document.getElementById("operator").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let answer = parseFloat(document.getElementById("answer").value);

    let result;
    let correct;

    if (operator == "+") {
        result = number1 + number2;
    } else if (operator== "-") {
        result = number 1 - number2;
    } else if (operator = "/") {
        result = number1 / number2;
    } else if (operator = "*") {
        result = number1 * number2;
    }

    if (result == answer) {
        correct = "Correct!";
    } else {
        correct = "Incorrect";
    }