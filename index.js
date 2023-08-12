
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
// TODO: Create an array of questions for user input
 const init = () => {
 inquirer.prompt(questions)
     .then((answers) => {
      console.log("creating svg file..")

// TODO: Create a function to write README file


const generateReadme = ({letters, textcolor, shapecolor, imageshape})=>
`
# ${letters} 
`

const readmePageContent = generateReadme(answers);
})};
function writeToFile(fileName, data) {
  

  fs.writeFile('shapes.js', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG logo!')
  );
};
init();