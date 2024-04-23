#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// prompt the user to enter a sentence 
let answers = await inquirer.prompt([
    {
        name : "sentence",
        type : "input",
        message : "Enter a sentence"
    }
])

// trimming the sentence and splitting it into words based on "Spaces"

let words = answers.sentence.trim().split(" ");

// analysis of user 
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60))