let arr = [1, 2, 3, 4, 5, 6];
// 6,1,2,3,4,5
let n = 14;
if (n > arr.length) {
  n = n % arr.length;
}
for (let j = 1; j <= n; j++) {
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
}
console.log(arr);
