const Shape = require('./shape')

class Triangle extends Shape{
    constructor(textcolor, shapecolor, text){
        super(textcolor, shapecolor, text)
    }
    render(){
        // SET value as TRIANGE!!
      return `<svg width="400" height="110">
      <rect width="300" height="100" style="fill:${this.shapecolor};" />
    </svg>` 
    }
}

module.exports= Triangle