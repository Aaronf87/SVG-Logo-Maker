const Shape = require('./shape')

class Rectangle extends Shape{
    constructor(textcolor, shapecolor, text){
        super(textcolor, shapecolor, text)
    }
    render(){
       
      return `<svg width="400" height="110">
      <rect width="300" height="100" style="fill:${this.shapecolor};" />
    </svg>` 
    }
}

module.exports=Rectangle