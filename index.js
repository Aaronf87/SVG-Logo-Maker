
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const Circle = require('./lib/circle.js')
const Square = require('./lib/square.js')
const Triangle = require('./lib/triangle.js')

// TODO: Create an array of questions for user input
 const init = () => {
 inquirer.prompt(questions)
     .then((answers) => {
      console.log("creating svg file..")
      let shape;
if (answers.imageshape === "triangle"){
shape = new Triangle()

}if (answers.imageshape === "square"){

shape = new Square()
}else {
  shape = new Circle()
};

// TODO: Create a function to write README file


// const generateSvg = ({letters, textcolor, shapecolor, imageshape})=>
// `
// # ${letters} 
// `

// const svgContent = generateSvg(answers);
})
function writeToFile(fileName, data) {
  

  fs.writeFile('generateSvg.svg', shape, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG logo!')
  );
};};
// a function call to start application
init();