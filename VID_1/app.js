// CONCEPT 1:- DIFF BETWEEN INT AND STRING
// let a = 10;
// let b = 20;

// let temp1 = 20;
// let temp2 = " twenty";

// console.log(a+b);       //here interpreter peforms arithmetic operation  (int+int==> int)
// console.log(temp1+temp2);     //here interpreter peforms concatenation      (string + int ==> string & string + string ==>string)

// // LOGIC for the same:-  interperter always stops the execution when she encounters two operands with one operator like ( a+b ), it first solves it then moves to next step

// // PREDICT OUTPUT:-  (for logic goto Readme.md file)
// console.log("the sum of "+a+" and "+b+" is "+a+b);      
// // now for this:-
// console.log("the sum of "+a+" and "+b+" is "+(a+b));
// // now for this:-
// console.log(a+b+" is the sum of "+a+" and "+b);



// // CONCEPT 2:- TYPE COERCION 
// //in short, js interpreter changes type based on operator.
// console.log("1" - 1);     //since here the role of "-" is only to subtract, it converts string into int.
// // same above logic for ==> /, % and *
// // only for "+" as it's used for arithmetic and concatenation, if it's one operand is string, it concatenates and if both are int it adds



// CONCEPT 3:- USER INPUT IN TERMINAL ONLY
// let prompt = require('prompt-sync')();
// const input = prompt("enter mobile number: ");    //accepts string by-default, need to use Number(value) to convert it
// console.log("Check type: ", typeof(input));

// console.log(`your number is: ${input}`);



// // CONCEPT 4:- SWAP OF 2 NUMBERS (3 WAYS)
// let n1 = 30;
// let n2 = 50;

// // Method one, using temp variable
// // let temp = n1;
// // n1 = n2;
// // n2 = temp;
// // console.log("Swapped value: ",n1, n2);

// // Method two, using basic maths
// // n1 = n1+n2;     //30+50==>80
// // n2 = n1-n2;     //80-50 ==> 30
// // n1 = n1-n2;     //80-30 ==> 50
// // console.log("Swapped value: ",n1, n2);

// // Method three, using destructuring
// [n1, n2] = [n2, n1]
// console.log("Swapped value: ", n1,n2);
