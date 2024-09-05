// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.
// Output:
// Print the result.
// Sample Input:
// 1000
// 700
// Sample Output:
// 300
var totalTk = 1000;
var totalCost = 700;
var cost = totalTk - totalCost;
console.log(cost);

// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

var mathMark = 75.25;
var biologyMark = 65;
var chimistryMark = 80;
var physicsMark = 35.45;
var banglaMark = 99.50;

var totalMark = mathMark + biologyMark + chimistryMark + physicsMark + banglaMark;
var averageMark = totalMark / 5;
console.log(averageMark);
console.log(averageMark.toFixed(2));


