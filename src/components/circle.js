// import using require

// declare class
import Shape from './shape';

// export class using module.exports
export default class Circle extends Shape{
    constructor(){
         super();
    }
    calculateArea(){
        console.log("area of a circle"+this.color);
        return 3.14*2*2;
    }
}