const prompt = require("prompt-sync")();
const number = Number(prompt("Enter a number: "));
let sum = 0;
let copy = number;
let dig = 0;
while (copy > 0) {
  dig = copy % 10;
  let fact = 1;
  for (let i = 1; i <= dig; i++) {
    fact = fact * i;
  }
  sum += fact;
  copy = Math.trunc(copy / 10);
}
console.log(sum === number ? "Strong Number" : "not strong number");
