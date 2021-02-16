/*INPUT: User enters in two numbers and an arithmetic operator.
*Enters in the answer to the math problem
*PROCESSING: The numbers are added together, multiplied, subtracted, or divided
*OUTPUT: The user is told if they are correct or incorrect
*/

function solveProblem() {
    //Get numbers and operator selection from user
    let number1 = parseFloat(document.getElementById("number1").value);
    let operator = document.getElementById("operator").value;
    let number2 = parseFloat(document.getElementById("number2").value);
    let answer = parseFloat(document.getElementById("answer").value);

    let correctAnswer;

    //Use a switch statement to compare user's answer to actual answer

    switch (operator) {
        case "+":
        answer = number1 + number2;   
        break;

        case "-":
        answer = number1 - number2;
        break;

        case "*":
            answer = number1 * number2;
            break;
        
        case "/":
            answer = number1 / number2;
            break;
    }
    let message;
    if (answer == correctAnswer) {
        message = "Correct!";
    } else {
        message = "Incorrect";
    }
    document.getElementById("output").innerHTML = message;
}