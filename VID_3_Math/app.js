// console.log(Math.min(1,2,5,6,2,1,5,7,8));
// console.log(Math.max(1,2,5,6,2,1,5,7,8));
// console.log(Math.abs(-50));
// console.log(Math.floor(0.9));
// console.log(Math.ceil(0.2));
// console.log(Math.round(0.3));
// console.log(Math.pow(5, 3));
// console.log(Math.random());
// console.log(Math.trunc(3.839));
// console.log((9.43423).toFixed(2));

// 1st Question- COUMPOUND INTEREST
// const prompt = require("prompt-sync")();
// const P = prompt("enter Principal: ");
// const r = prompt("enter Rate of Interest: ");
// const t = prompt("enter Period: ");
// const CI = P*Math.pow((1+r/100),t)-P;
// console.log(CI.toFixed(2));

//2nd question- OTP generation and validation
// const prompt = require("prompt-sync")();
// const OTP = Math.trunc(Math.random()*10000);    //4 times 0's so 4 number will be there
// console.log(OTP);
// const OTP_input = Number(prompt("enter OTP: ")); //converted cause it's take string as default type, and in if-else we are doing strict-comparision
// if (OTP_input === OTP) {
//   console.log("Logic success");
// } else {
//   console.log("login failed");
// }

// 4th question:- circumference of circle
// const prompt = require("prompt-sync")();
// const radius = prompt("enter radius of circle: ");
// console.log("circumference of circle is: ", (2*Math.PI*radius).toFixed(3));
