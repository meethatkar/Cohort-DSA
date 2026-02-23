let main_arr = [23, 42, 75, 28, 94, 85, 32, 98, 1];

// Question 1:- if declared empty array using new Array(3), then how push(), pop(), shift(), unshift() will react ??
// GUESS THE OUTPUT, THEN CHECK ANS
// let arr1 = new Array(3);
// arr1.push(50);
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// arr1.unshift(30);
// console.log(arr1);
// arr1.pop();
// console.log(arr1);


// QUESTION 2:- (SUM OF ALL ARR ELEMS)


// QUESTION 3:- FIND MAX NUM IN ARR.        (AI REVIEW 10/10)
// let maxNum = main_arr[0];       //EARLIER IT WAS 0, BUT IF AN ARRAY CONTINS NEGATIVE NUMS THEN IT WILL DISPLAY WRONG OUTPUT, SO STORING ARR[0] NOW.
// for(let i=1; i<main_arr.length; i++){         //started loop with i=1; cause already arr[0] is stored as maxNum;
//   if(main_arr[i] > maxNum){
//     maxNum = main_arr[i];
//   }  
// }
// console.log("MAx Num: ", maxNum);



// QUESTION 4:- FIND 2ND MAX ELEMENT.     (AI REVIEW 10/10)
// let maxNum = main_arr[0];
// let secMax = -Infinity;   //start with the lowest possible number

// if (main_arr.length < 2) {
//   console.log("Array needs at least 2 elements");
//   return;
// }
// for (let i = 1; i < main_arr.length; i++) {
//   if (main_arr[i] > maxNum) {
//     secMax = maxNum;    //now maxNum becomes 2nd max;
//     maxNum = main_arr[i];
//   }
//   else if (main_arr[i] > secMax && main_arr[i] !== maxNum) {
//     // Logic: It's bigger than secMax, but NOT the same as maxNum
//     // (This prevents duplicates like [50, 50] treating 50 as both 1st and 2nd max)
//     secMax = main_arr[i];
//   }
// }
// console.log("First max: ", maxNum);
// // 3. Check if secMax is still -Infinity (e.g., input was [5, 5, 5])
// if (secMax === -Infinity) {
//   console.log("No second distinct maximum found");
// } else {
//   console.log("Second Max:", secMax);
// }



// QUESTION 5:- Reverse arr without using new arr.
// let i=0, j=main_arr.length-1;
// let temp;
// while(i<j){
//   temp = main_arr[j];
//   main_arr[j] = main_arr[i];
//   main_arr[i] = temp;
//   i++; j--
// }
// console.log(main_arr);


// // QUESTION 6:- KEEP ALL 0 TO LEFT AND ALL 1 TO RIGHT IN MIXED ARRAY OF 0 & 1.
// let mixed_arr = [0, 1, 1, 0, 1, 0 ,0];
// let i=0, j=0, temp = 0;
// while(i<mixed_arr.length){
//   if(mixed_arr[i]===0){
//     temp = mixed_arr[j];
//     mixed_arr[j] = mixed_arr[i];
//     mixed_arr[i] = temp;
//     j++;
//   }
//   i++;
// }
// console.log("Sorted Array: ", mixed_arr);

// // QUESTION 7:- KEEP ALL NEGATIVE ON LEFT AND POSITION ON RIGHT, SAME AS ABOVE
// let pos_neg_arr = [-3, 3, -5, 2, -8, 12, -4, 7];
// let i=0, j=0, temp;
// while(i<pos_neg_arr.length){
//   if(pos_neg_arr[i]<0){
//     temp = pos_neg_arr[j];
//     pos_neg_arr[j] = pos_neg_arr[i];
//     pos_neg_arr[i] = temp;
//     j++;
//   }
//   i++;
// }
// console.log("Sorted Arr: ", pos_neg_arr);
