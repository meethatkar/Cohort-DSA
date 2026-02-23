const prompt = require('prompt-sync')();
let n = Number(prompt("Enter number of patterns you want to print (1-16): "));

// // SQUARE PATTERN
// for(let i=1; i<=n; i++){
//   for(let j=1; j<=n; j++){
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// // RIGHT ANGLE TRIANGLE
// for(let i=1; i<=n; i++){
//   for(let j=1; j<=i; j++){
//     // process.stdout.write("* ");       //STAR
//     process.stdout.write(j+" ");       //NUMBER
//   }
//   console.log();
// }


// // INVERTED RIGHT ANGLE TRIANGLE
// for(let i=1; i<=n; i++){
//   for(let j=n; j >= i; j--){
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// // MIRROR RIGHT ANGLE TRIANGLE & EQUILATERAL TRIANGLE
// for(let i=1; i<=n; i++){
//   for(let j=1; j<= (n-i); j++){
//     // process.stdout.write("  ");        //MIRROR TRIANGLE
//      process.stdout.write(" ");        //PERFECT EQUILATERAL TRIANGLE
//   }
//   for(let p=1; p<=i; p++){
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// // X PATTERN
// for(let i=1; i<=n; i++){
//   for(let j=1; j<=n; j++){
//     if(j===i || (j+i)===(n+1)) process.stdout.write("* ");      //main logic is in this line
//     else process.stdout.write("  ");
//   }
//   console.log();
// }

// // V PATTERN
// for(let i=1; i<=n; i++){
//   for(let j=1; j<= (n*2)-1 ;j++){     //main logic 1
//     if(j===i || (i+j) === (n*2)) process.stdout.write("* ");      //main logic 1
//     else process.stdout.write("  ");
//   }
//   console.log();
// }