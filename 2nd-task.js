// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk
// */

const burgerPrize = 550;
if (burgerPrize > 500) {
  console.log("free Coke");
} else {
  console.log("coke pabe");
}

// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a
//  health category based on the BMI value. Use nested if-else statements to determine the
//   health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

// */

// Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

// var score = 80;

// if (score >= 80) {
//   console.log("Grade:A");
// } else if (score >= 70) {
//   console.log("Grade:B");
// } else if (score >= 50) {
//   console.log("Grade:C");
// } else if (score >= 40) {
//   console.log("Grade:D");
// } else {
//   console.log("Grade:f");
// }

var score = 80;

var grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else if (score >= 70 && score <= 79) {
  grade = "C";
} else if (score >= 60 && score <= 69) {
  grade = "D";
} else if (score >= 0 && score <= 60) {
  grade = "F";
} else {
  grade = "Invaid Score";
}
console.log("Grade", grade);
