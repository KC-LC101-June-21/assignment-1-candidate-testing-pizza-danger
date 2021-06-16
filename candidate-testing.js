const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first woman in Space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = [
  "\nWho was the first American woman in space? ",
  "\nTrue or false: 5 kilometer == 5000 meters? ",
  "\n(5 + 3)/2 * 10 = ? ",
  "\nGiven the array [8, 'Orbit', 'Trajectory', 45], What entry is at index 2? ",
  "\nWhat is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "sally ride",
  "true",
  "40",
  "trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter Your Name: ")
console.log("\nGreetings " + candidateName + "!" + "\nPlease answer the following questions.");
}

/*function askQuestion(candidateAnswer = input.question(question)) {


  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //console.log(candidateAnswer);

if (candidateAnswer === correctAnswer) {
  console.log("Right!");
} else {
  console.log("Nope, try again.")
}
}*/

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
   candidateAnswers[i] = input.question(questions[i]).toLowerCase();
  }
  console.log(candidateAnswers);
}



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly
   //
  let grade = 0;
  for (let i = 0; i <= 4; i++) {
    if (candidateAnswers[i] === correctAnswers[i]) {
      grade += 1;
    }
  } 
  console.log(grade/5*100 + '%');
  return grade/5*100 + '%';
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //input.question("Enter Your Name: ")
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};