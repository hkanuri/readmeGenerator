const fs = require('fs');
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

// user prompts
const promptUser = () =>
    inquirer.prompt([
        // THEN a high-quality, professional README.md is 
        // generated with the title of my project and sections entitled Description, 
        // Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
        // how to create sections like decription ,TOC , and questions?
        // {
        //     type: "input",
        //     name: "title",
        //     message: "Name the title  of your project?",
        // },
        // {
        //     type: "input",
        //     name: "location",
        //     message: "what is your Location?",
        // },
        {
            type: "input",
            name: "description",
            message: "what is your bio?",
        },
        // {
        //     type: "input",
        //     name: "github",
        //     message: "what is your github accout?",
        // },
        // {
        //     type: "input",
        //     name: "linkedIn",
        //     message: "what is your linkedIn Id?",
        // },
        // {
        //     type: "input",
        //     name: "filename",
        //     message: "what would you name your file?",
        // },

    ]);


// function to  push  the  prompts
// const generator = (data) => {
//     // put data to readme from prompts
//     return (`
//     ${data.title} 
//     ${data.location}
//     ## Description
//     ${data.description}
//     ${data.github}
//     ${data.linkedIn}
//     ${data.filename}`);

// }

// function generator(data) {
//     return `# Test
//     ## Description ${data.description}`;
//   }

  function generator(data) {
    let string = ``
    string += '# Test\n'
    string += '## Description\n'
    string += `${data.description}\n`
     return string
   }

const gen = async () => {
    try {
        const data = await promptUser();
        console.log(data);

        const readme = generator(data);
        await writeFileAsync("README.MD", readme);
        console.log("success");
    }
    catch (err) { console.log(err) }
};
gen();