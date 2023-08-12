// Exports `Triangle`, `Circle`, and `Square` classes
class Shape {
constructor(textcolor, shapecolor, text){
this.textcolor = textcolor;
this.shapecolor = shapecolor;
this.text = text;

}

getText (){

    return this.text
}
setText(newText){
    this.text= newText
}
getShapecolor(){
    return this.shapecolor
}
setShapeColor(newShapeColor){
    this.shapecolor = newShapeColor
}
getTextColor(){
    return this.textcolor
}
setTextColor(newTextColor){
    this.textcolor = newTextColor
}
render(){
    
}
}






module.exports = Shape;