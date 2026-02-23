let main_arr = [1, 2, 3, 4, 5, 6];

// Question 1:- Rotate elems on left by 1.
// if(main_arr.length===0) return;
// let temp = main_arr[0];   //so later on we'll add it to main_arr[main_arr.length-1];
// let i = 1;        //cause in next step need ot do [i-1], so if i is taken as 0 then 0-1 would be undefiend and prg will crash
// for(let i=1; i<main_arr.length; i++){
//   main_arr[i-1] = main_arr[i];
// }
// main_arr[main_arr.length-1] = temp;
// console.log("left Shifted Arr: ", main_arr);

// Question 2:- Right rotation by 1.
// if(main_arr.length===0) return;
// let n = main_arr[main_arr.length-1];
// for(let i=main_arr.length-2; i>=0; i--){
//   main_arr[i+1] = main_arr[i];
// }
// main_arr[0] = n;
// console.log(main_arr);


// Question 3:- rotate by k times.      NOTE-BUG IS THERE NEED TO CHECK IT
if (main_arr.length === 0) return;
let prompt = require("prompt-sync")();
let k = Number(prompt("Enter rotation number: "));

// Edge Case:- (if enter more then arr.length, we need to optimized it, like len=4, k=7, total optimzed loop=3, unooptimzed loop=7)
k = k > main_arr.length ? k % main_arr.length : k;
console.log("K: ", k);

let n = main_arr[main_arr.length - 1];
for (let j = 0; j < k; j++) {
  for (let i = main_arr.length - 2; i >= 0; i--) {
    main_arr[i + 1] = main_arr[i];
  }
}
main_arr[0] = n;
console.log(main_arr);