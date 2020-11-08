// declare class

// export class using module.exports
class Shape{
    constructor(){
        this.color="red";
    }
    drawShape(){
    
          console.log("draw a shape");
    }
    calculateArea(){
         console.log("Dont want to calculate now");
         return 0;
    }
}

module.exports = Shape;
