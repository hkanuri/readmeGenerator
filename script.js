const fs = require('fs');
const inquirer = require("inquirer");
const util = require("util");


const writeFileAsync = util.promisify(fs.writeFile)
 
const promptUser = () =>
     inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "what is your name",
        },
        {
            type: "input",
            name: "location",
            message: "what is your Location?",
        },
        {
            type: "input",
            name: "bio",
            message: "what is your bio?",
        },
        {
            type: "input",
            name: "github",
            message: "what is your github accout?",
        },
        {
            type: "input",
            name: "linkedIn",
            message: "what is your linkedIn Id?",
        },
        {
            type: "input",
            name: "filename",
            message: "what would you name your file?",
        },

    ]);
    // const generator
     const gen = async () => {
        try {
            const data = await promptUser();
            const readme = generator(data);
            await writeFileAsync("README.MD", readme);
            console.log("success");
        }
        catch (err) {console.log(err)}
    };
    gen();