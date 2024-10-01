// create a program that prompt the user to enter their score
let Score = prompt("Enter your Score:");

// Convert the input to a number
Score = parseInt(Score);

// Use else if statements to assign grades
if (Score >= 90) {
  console.log("Your grade is: Excellent.");
} else if (Score >= 80 && Score <= 89) {
  console.log("Your grade is: Good.");
} else if (Score >= 70 && Score <= 79) {
  console.log("Your grade is: Fair.");
} else {
  console.log("Your grade is: Needs Improvement.");
           }
