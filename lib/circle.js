const Shape = require('./shape')

class Circle extends Shape{
    constructor(textcolor, shapecolor, text){
        super(textcolor, shapecolor, text)
    }
    render(){
        return `<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill= ${this.shapecolor}/>
      </svg>`
    }
}

module.exports=Circle