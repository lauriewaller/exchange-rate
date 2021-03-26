// class Triangle {
//   constructor(side1, side2, side3) {
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
//   }

//   checkType() {
//     //Function body goes here.
//   }    
// };


//----------
// export function Triangle(side1, side2, side3) {
//   ...
// }

// export function Circle(radius) {
//   ...
// }

// export function Rectangle(side1, side2) {
//   ...
// }

// main.js:
// import { Triangle, Rectangle, Circle } from './shapes.js';

///----------
//If we only plan to export one thing from a file, we can use a default export

// export default function Triangle(side1, side2, side3) {
//   ...
// }

//main.js:
//import Triangle from './triangle-logic.js';


//-------
// OR, this also works for single export:

// export function Triangle(side1, side2, side3) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// }

// Triangle.prototype.checkType = function() {
//   return "I can't answer that yet!";
// }
// main.js
// import { Triangle } from './triangle-logic.js';

// <!-- const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}` -->