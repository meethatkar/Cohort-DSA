const prompt = require("prompt-sync")();

// ISBN CHECKER (IMP)
// const num = prompt("Enter book number: ");
// // LOGIC for 10 digit num;
// // d1*1+d2*2+d3*2....+d10*10 = mod 11 === 0 ? "is ISBN number" : "Not ISBN Number";

// // LOGIC for num count (using math, interview style)
// let temp = num;
// let count = 0;
// while (temp > 0) {
//   count++;
//   temp = Math.trunc(temp / 10);
// }
// temp = num;
// let total = 0;
// if (count === 10) {
//   while (temp > 0) {
//     let multiplier = (temp % 10) * (count);
//     count--;
//     temp = Math.trunc(temp / 10);
//     total += multiplier;
//   }
//   if (total % 11 === 0) {
//     console.log("yes");
//   }
//   else {
//     console.log("no");
//   }
// }
// else if (count === 13) {
//   let multiplier = 0;
  
//   while (temp>0){
//     if(count%2==0){
//       multiplier = (temp%10)*3;
//     }
//     else{
//       multiplier = (temp%10)*1;
//     }
//     total += multiplier;      
//     temp = Math.trunc(temp/10);
//     count--;      //decremented, cause if count is even then multiply with 3 or else with 1.
//   }
//   if(total%10===0){
//     console.log("Yes");
//   }
//   else{
//     console.log("No");
//   }
// }
// else {
//   console.log("Invalid Number");
// }


// AUTOMORPICH NUM CHECKER
let num = Number(prompt("Enter numer: "));
let tempNum = num;
let sqr = num*num;

let count = 0;
while(num>0){
  count++;
  num = Math.trunc(num/10);
}
// DRY RUN:-
/*
  num:- 25
  count = 2;
  sqr = 625
  math.pow(10, count) ==> math.pow(10, 2)==> 10*10 ==> 100
  sqr%100 === tempNum ==> 625%100 ===> 25 === tempNum [YES]   (automorphic)

  num:- 7;
  count = 1;
  sqr = 49;
  math.pow(10, 1) ==> 10
  sqr%10 === tempNum ==> 49%10 = 9 ===> 9=== tempNum [No] (not-automorphic)

  num:- 19;
  count = 2;
  sqrt = 316;
  math.pow(10,2) ==> 100;
  316%100 ==> 16 === tempNum [no] [not-automorphic]
*/
if(sqr%Math.pow(10, count)===tempNum){
  console.log("Automorphic num");
}
else{
  console.log("Not Automorphic");
}