#!/usr/bin/env node
import inquirer from "inquirer";

const quiz: {
  question_1: string,
  question_2: string,
  question_3: string,
  question_4: string,
  question_5: string,
} = await inquirer.prompt([
  {
      name: "question_1",
      type: "list",
      message: "Q1. What is the correct way to check if two values are not equal in TypeScript?",
      choices: ["a == b", "a === b", "a = b", "a !== b"]  
  },
  {
      name: "question_2",
      type: "list",
      message: "Q2. Which of the following characters is commonly allowed in valiable names in TypeScript?",
      choices: ["$","@","#","&"]  
  },
  {
      name: "question_3",
      type: "list",
      message: "Q3. Which operator is commonly used for string concatenation in TypeScript?",
      choices: ["+","-","*","/"]  
  },
  {
      name: "question_4",
      type: "list",
      message: "Q4. In TypeScript, which symbol is commonly used to terminate a ststement?",
      choices: [".",":",";",","]  
  }, 
  {
      name: "question_5",
      type: "list",
      message: "Q5 . Which method of inquirer.js is used to start the prompt Interface and receiveuser input?",
      choices: ["start()", "prompt()", "init()", "run()"]  
  },
]);

let score: number = 0;

switch(quiz.question_1){
  case "a !== b":
    console.log("1. Correct!");
    ++score;
    break;
    default:
      console.log("1. Incrrect!");
}

switch(quiz.question_2){
   case "$":
   console.log("2. Correct!");
   ++score;
   break;
   default:
   console.log("2. Incrrect!");
}

 switch(quiz.question_3){
    case "+":
    console.log("3. Correct!");
    ++score;
    break;
    default:
    console.log("3. Incrrect!");
}

switch(quiz.question_4){
  case ";":
    console.log("4. Correct!");
    ++score;
    break;
    default:
    console.log("4. Incrrect!");
}

switch(quiz.question_5){
  case "aprompt()":
    console.log("5. Correct!");
    ++score;
    break;
    default:
    console.log("5. Incrrect!");
}

console.log(`core ${score}`);
                              