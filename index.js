
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const Circle = require('./lib/circle.js')
const Square = require('./lib/square.js')
const Triangle = require('./lib/triangle.js')

function writeToFile(filename, content) {

  fs.writeFile(filename, content, (error) =>{
    if (error){
      console.log(error)
    }else{
      console.log('created new svg file');
    }
  })
  
  ;}


// TODO: Create an array of questions for user input
 const init = () => {
 inquirer.prompt(questions)
     .then((answers) => {
      console.log(answers);
      console.log("creating svg file..")

      let shape;
      if (answers.imageshape === "triangle"){
      shape = new Triangle(answers.textcolor, answers.shapecolor,answers.letters)
      
      }if (answers.imageshape === "square"){
      
      shape = new Square(answers.textcolor, answers.shapecolor,answers.letters)
      }else {
     
        shape = new Circle(answers.textcolor, answers.shapecolor,answers.letters)
      }
    
      return shape;
    }
  
      )
      .then((s)=> {
        console.log(s);
        const fileName = `svglogo.svg`;
       writeToFile(fileName,s.render());
      })};
    
      
      

// TODO: Create a function to write README file


// const generateSvg = ({letters, textcolor, shapecolor, imageshape})=>
// `
// # ${letters} 
// `

// const svgContent = generateSvg(answers);
// })
  

//   fs.writeFile('generateSvg.svg', shape, (err) =>
//     err ? console.log(err) : console.log('Successfully created SVG logo!')
//   );
// };;
// a function call to start application
init();