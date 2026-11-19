//NOTE:- DSA POV THIS IS BAD APPROACH, IT'S TIME AND SPACE COMPLEXITY IS TOO MUCH, WE'VE TO USE 2ND APPROACH THAT IS IN VID_13>>app.js

/*
ISBN-10 (10 digits, modulo-11 check)

1565927849 (NOPE)
7890123450

ISBN-13 (13 digits, modulo-10 weighted check)

9780306406157
9781565927849 (NOPE)
9780471958696 (NOPE)
9780201633610
9780596007126
 */

const ISBN = 1565927849;
// const ISBN=9780596007126;

let tempISBN = ISBN;
let checkDigit = 0;
while (tempISBN > 0) {
  checkDigit++;
  tempISBN = Math.trunc(tempISBN / 10);
}
function check10Digit(num) {
  let isbnSum = 0;
  for (let i = 0; i < num.length; i++) {
    isbnSum += num[i] * (i + 1);
  }

  isbnSum % 11 === 0
    ? console.log("ISBN HAI re baba")
    : console.log("NOT ISBN");
}

function check13Digit(num) {
  let isbnSum = 0;
  for (let i = 0; i < num.length; i++) {
    if ((i + 1) % 2 === 0) {
      isbnSum += num[i] * 3;
    } else {
      isbnSum += num[i] * 1;
    }
  }

  isbnSum % 10 === 0
    ? console.log("ISBN HAI re baba")
    : console.log("NOT ISBN");
}

checkDigit === 10
  ? check10Digit(ISBN.toString().split(""))
  : checkDigit === 13
    ? check13Digit(ISBN.toString().split(""))
    : console.log("Invalid ISBN Number");
