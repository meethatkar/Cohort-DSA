// Practice 1:- calculate num of vowel and consonents in a string;
// let vowelCount = 0 ;
// let consonentCount = 0 ;
// const prompt = require("prompt-sync")();
// const word = prompt("Enter a Word: ");


// for (let i = 0; i < word.length; i++) {
//   if(!/^[a-zA-z]$/.test(word[i])){}      //managing edge case
//   else {
//     switch (word[i]) {
//       case "a":
//       case "o":
//       case "i":
//       case "e":
//       case "u":
//       case "A":
//       case "E":
//       case "I":
//       case "U":
//       case "O":
//         vowelCount++;
//         break;
//       default:
//         consonentCount++;
//     }
//   }
// }

// console.log("Vowels: ",vowelCount);
// console.log("Consonents: ",consonentCount);






// Practice 2:- calculate area of circle, rectangle, square or triangle based on condition
// console.log("select 1 to calculate area of circle");
// console.log("select 2 to calculate area of rectangle");
// console.log("select 3 to calculate area of square");
// console.log("select 4 to calculate area of triangle");

// let prompt = require("prompt-sync")();
// const num = Number(prompt("Select choice: "));


// switch(num){
//   case 1:
//     let r = prompt("enter Radius of circle: ");
//     console.log("Area of circle is: ", (Math.PI*r*r));
//   break;
//   case 2:
//     let b = prompt("Enter breadth of rectangle: ");
//     let l = prompt("Enter length of rectangle: ");
//     console.log("area of rectangle is: ", (l*b));
//   break;
//   case 3:
//     let side = prompt("Enter side of square: ");
//     console.log("area of square is: ", (side*side));
//   break;
//   case 4:
//     let h = prompt("Enter height of triangle: ");
//     let base = prompt("Enter base of triangle: ");
//     console.log("area of triangle is: ", ((h*base)/2));
//   break;
//   default:
//     console.log("invalid option entered !!");
//   break;
// }
