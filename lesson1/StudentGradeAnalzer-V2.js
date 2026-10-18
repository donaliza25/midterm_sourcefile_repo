// ------------------------------
// A. Student CLASS
// ------------------------------
class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let sum = 0;

        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }

        return sum / this.scores.length;
    }

    getLetterGrade() {
        let avg = this.getAverage();

        if (avg >= 90) {
            return "A";
        } else if (avg >= 80) {
            return "B";
        } else if (avg >= 70) {
            return "C";
        } else if (avg >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

// ------------------------------
// B. ANALYZER FUNCTION
// ------------------------------
function analyzeClass(students) {
    console.log("------- STUDENT REPORT -------");

    let classSum = 0;
    let topStudent = null;
    let highestAvg = 0;

    for (let i = 0; i < students.length; i++) {
        let s = students[i];
        let avg = s.getAverage();
        let grade = s.getLetterGrade();

        console.log(`${s.name} - Average: ${avg.toFixed(1)} | Grade: ${grade}`);

        classSum += avg;

        if (avg > highestAvg) {
            highestAvg = avg;
            topStudent = s.name;
        }
    }

    let classAverage = classSum / students.length;

    console.log("-----------------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Student: ${topStudent} with ${highestAvg.toFixed(1)}`);
}


// ------------------------------
// C. TEST DATA
// ------------------------------
const studentData = [
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];


// Convert raw objects → Student instances
let students = [];

for (let i = 0; i < studentData.length; i++) {
    let s = new Student(studentData[i].name, studentData[i].scores);
    students.push(s);
}


// Run analyzer
analyzeClass(students);
