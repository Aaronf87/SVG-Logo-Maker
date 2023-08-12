//  type: 'list',
// type: "checkbox"
// type: "input"
const questions =
[ //     //questions list
    {
    type: "input",
    name: "letters",
    message: "Enter (3) characters that will be used in the logo"
    },
    
    {type: 'input',
    name: 'textcolor',
    message: 'Enter the text color',
    },
    {
    // description
    type: 'input',
    name: 'shapecolor',
    message: 'Enter the shape color',
    },
    // Triangle, Circle, and Square 
    {
    type: 'list',
    name: 'imageshape',
    choices: ["triangle", "circle", "square"],
    },]

    module.exports = questions