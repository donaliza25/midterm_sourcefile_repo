'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// ORIGINAL DATA
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

const originalNames = Array.from(studentNames);

// PART A
console.log('\nPART A: ORIGINAL RECORDS');
for (let i = 0; i < studentScores.length; i++) {
  console.log(i + " - " + studentNames[i] + ": " + studentScores[i]);
}

// PART B
console.log('\nPART B: ADD NEW STUDENTS');

studentNames.push('Faith');
studentNames.unshift('Aaron');

studentScores.push(88);
studentScores.unshift(76);

let count = 0; 

for (let i = 0; i < studentScores.length; i++) {
    count++;
}

console.log("Updated Students:", studentNames);
console.log("\nUpdated Scores:", studentScores);
console.log("\nNumber of Students:", count);

// PART C
console.log('\nPART C: REMOVE AND REPLACE RECORDS');

studentNames.shift();
studentScores.shift();

studentNames.pop();
studentScores.pop();

console.log("Names:", studentNames);
console.log("Daniel's index:", studentNames.indexOf('Daniel'));

const danIndex = studentNames.indexOf('Daniel');
studentNames.splice(danIndex, 1);   // remove Daniel
studentScores.splice(danIndex, 1);  // remove Daniel's score

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log("Names:", studentNames);
console.log("Scores:", studentScores);

// PART D
console.log('\nPART D: CLASS STATISTICS');

let total = 0;
let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let i = 0; i < studentScores.length; i++) {
  total += studentScores[i];
  if (studentScores[i] > highestScore) {
        highestScore = studentScores[i];}
        
  if (studentScores[i] < lowestScore){
    lowestScore = studentScores[i];
  }
}

let avg = total / studentScores.length;

console.log("Total Score:", total);
console.log("Average Score:", avg.toFixed(2));
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);

// PART E
console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = score => score >= 75 ? "Passed" : "Failed";

const passed = studentScores.filter(score => score >= 75);
const statuses = studentScores.map(passingScore);

console.log("Passing Scores:", passed);
console.log("Statuses:", statuses);
console.log("At least one student failed:", studentScores.some(score => score < 75));
console.log("All students passed:", studentScores.every(score => score >= 75));

// PART F
console.log('\nPART F: SORT AND SEARCH');

const copy = Array.from(studentScores);
copy.sort((a, b) => b - a);

console.log("Scores from highest to lowest:", copy);
console.log("Contains 91:", studentScores.includes(91));
console.log("Index of 91:", studentScores.indexOf(91));

// PART G
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let row = 0; row < activityScores.length; row++) {
  let rowTotal = 0;

  for (let column = 0; column < activityScores[row].length; column++) {
    rowTotal += activityScores[row][column];
  }

  let rowAverage = rowTotal / activityScores[row].length;
  activityAverages.push(rowAverage);

  console.log(originalNames[row] + "'s activity average:", rowAverage.toFixed(2));
}

console.log("Activity Averages:", activityAverages);

// PART H
console.log('\nPART H: TEXT SUMMARY');
console.log("Students:", studentNames.join(" | "));
