const fs = require("fs");
const inquirer = require("inquirer");
const createReadme = require("./Utility/createReadme.js"); //this is where the ReadMe will be written to

function run() {  
    inquirer.prompt(questions).then((responses) => {
      console.log("Writing ReadMe file"); //this lets the user know that this function has started working even if an error comes up later
      writeReadme("./Utility/README.md", createReadme({ ...responses }))
        .then(() => {
          console.log("ReadMe file written successfully."); //we hope to see this message pop up in the console...
        })
        .catch((err) => {
          console.log("Error writing ReadMe file:", err); //but this message is here just in case
        });
    });
  }

function writeReadme(fileName, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, (err) => {
        if (err) {
          reject(err); //if we get an error, this will tell us what the exact problem is
        } else {
          resolve();
        }
      });
    });
  }


const questions = [ //these are all of the questions that are asked to the user as the program runs
    {
        type: "input",
        name: "title",
        message: "What is your project called?",
    },
    {
        type:"input",
        name:"description",
        message:"Why did you make this project?",
    },
    {
        type:"input",
        name:"function",
        message:"What does this project do?",
    },
    {
        type:"input", //I was going to make this a list instead but I didn't research what types of creative licenses are available so this is up to the user to specify
        name:"license",
        message:"What type of license does this project have?",
    },
    {   type:"input",
        name:"collaborators",
        message:"Who else worked on this project?",
    },
]

run() //this line calls the function that sets the rest of the code in motion