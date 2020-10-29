// import using require

// declare class
//import Shape from './shape';
const Shape= require('./shape');

// export class using module.exports
 class Circle extends Shape{
    constructor(){
         super();
    }
    calculateArea(){
        console.log("area of a circle"+this.color);
        return 3.14*2*2;
    }
}
module.export = Circle;