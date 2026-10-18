// Array of student scores
let scores = [90, 75, 95, 65, 80];

// Variables for total, pass/fail count, highest, lowest
let sum = 0;
let passed = 0;
let failed = 0;
let highest = scores[0];
let lowest = scores[0];

// Display all student scores
console.log("Student Scores:");
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);

    // Add each score to total
    sum = sum + scores[i];

    // Count passed and failed
    if (scores[i] >= 75) {
        passed++;
    } else {
        failed++;
    }

    // Check for highest score
    if (scores[i] > highest) {
        highest = scores[i];
    }

    // Check for lowest score
    if (scores[i] < lowest) {
        lowest = scores[i];
    }
}


// Compute average score
let avg = sum / scores.length;
console.log("");

// Display remarks for each student
for (let i = 0; i < scores.length; i++) {

    // Determine remark based on score
    if (scores[i] >= 90 && scores[i] <= 100) {
        console.log("Student " + (i + 1) + ": " + scores[i] + " - Excellent - Passed");
    } else if (scores[i] >= 80 && scores[i] <= 89) {
        console.log("Student " + (i + 1) + ": " + scores[i] + " - Very Good - Passed");
    } else if (scores[i] >= 75 && scores[i] <= 79) {
        console.log("Student " + (i + 1) + ": " + scores[i] + " - Good - Passed");
    } else {
        console.log("Student " + (i + 1) + ": " + scores[i] + " - Failed");
    }
}

console.log("");

// Final summary output
console.log("Total Score: " + sum);
console.log("Average Score: " + avg);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
