const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const createReadme = require("./Utility/createReadme.js");

function writeReadme(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.log("error");
        } else {
          resolve();
        }
      });
}

function run() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Writing ReadMe file");
        writeReadme("./dist/README.md", createReadme({...responses}));
    });
}


const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is your project called?",
    },
    {
        type:"input",
        name:"Purpose",
        message:"Why did you make this project?",
    },
    {
        type:"input",
        name:"Function",
        message:"What does this project do?",
    },
]

run()