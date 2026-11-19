// print the count of sub-arrayBuffer, whose sum is equals to the target
// EG:- [1,2,3,4,5] TARGET=12, count = 2, subarray-{ [2,3,7]; [7,5] }
let arr = [1, 2, 3, 7, 5];
let TARGET = 12;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    if (sum === TARGET) {
      count++;
    }
  }
}

console.log(count);
