const Shape = require('./shape')

class Square extends Shape{
    constructor(textcolor, shapecolor, text){
        super(textcolor, shapecolor, text)
    }
    render(){
             
      return `<svg width="200" height="200">
      <rect width="100" height="100" style="fill:${this.shapecolor};" />
    </svg>` 
    }
}

module.exports=Square