const prompt_cs = require("prompt-sync")();

// PRACTICE CODE 1
// const randomNum = Math.trunc(Math.random()*100+1);    //+1 done cause we don't want 0  as random number. (range - [1-100]) old range-[0-99]
// let user = 0;
// do{
//   user = Number(prompt_cs("Guess the number between 1 to 100: "));
//   if(user>randomNum){
//     console.log("gussing number is smaller");
//   }
//   else if(user<randomNum){
//     console.log("guessing number is bigger");
//   }
//     else if (user === randomNum) {
//       console.log("You Gussed Correctly")
//     }
// }while(user!==randomNum);

// PRACTICE 2 SASTA CALC  [AI revied code 9/10]
// let n = 0;
// let ranAgain;
// do {
//   console.log("SASTA CALCULATOR");
//   console.log("Enter 1 for addition operation");
//   console.log("Enter 2 for subtraction operation");
//   console.log("Enter 3 for multiplication operation");
//   console.log("Enter 4 for division operation");
//   n = Number(prompt_cs("Enter number: "));
//   if (n >= 1 && n <= 4) {      //condition check first cause, it'll not create a and b vars if condition fails, if use default here then a and b will be created and it will take unnecessarytime and space
//     let a = Number(prompt_cs("Enter first number: "));
//     let b = Number(prompt_cs("Enter second number: "));
//     switch (n) {
//       case 1:
//         console.log(a + b);
//         break;
//       case 2:
//         console.log(a - b);
//         break;
//       case 3:
//         console.log(a * b);
//         break;
//       case 4:
//         b===0 ? console.log("cannot divide by 0, Maths Error") : console.log(a / b);
//         break;
//     }
//   }
//   else {
//     console.log("Invalid option entered");

//   }
//   ranAgain = Number(prompt_cs("Press 0 to run again: "));
// } while (ranAgain === 0);



// PRACTICE 3 RESTAURANT ORDER TAKER [AI reviewd:- 8.5/10], just repeation is ther, so use objs to store price and items
let foodCategory, gst = 18, itemCategory, addMore, tryAgain;
let foodList = [];
let priceTotal = 0;
do {
  // value reset to new order
  foodList = [];
  priceTotal = 0;

  // logs
  console.log("Meet's International Dhaba");
  console.log("Press 1 for Indian Food");
  console.log("Press 2 for American Food");
  console.log("Press 3 for Italian Food");
  console.log("Press 4 for Chinese Food");
  foodCategory = Number(prompt_cs("Enter here: "));
  switch (foodCategory) {
    case 1:
      do {
        console.log("Press 1 for Salad");
        console.log("Press 2 for Roti");
        console.log("Press 3 for Rice");
        console.log("Press 4 for Bhaji");
        console.log("Press 5 for Dessert");
        itemCategory = Number(prompt_cs("Enter here: "));
        switch (itemCategory) {
          case 1:
            foodList.push("Salad ");
            priceTotal += 70;
            break;
          case 2:
            foodList.push("Roti ");
            priceTotal += 10;
            break;
          case 3:
            foodList.push("Rice ");
            priceTotal += 50;
            break;
          case 4:
            foodList.push("Bhaji ");
            priceTotal += 80;
            break;
          case 5:
            foodList.push("Dessert ");
            priceTotal += 90;
            break;
          default:
            console.log("Invalid number entered");
        }
        addMore = Number(prompt_cs("Press 0 to add more items: "));
      } while (addMore === 0);
      break;
    case 2:
      do {
        console.log("Press 1 for Burger");
        console.log("Press 2 for Fries");
        console.log("Press 3 for Hotdog");
        console.log("Press 4 for Soda");
        console.log("Press 5 for Dessert");
        itemCategory = Number(prompt_cs("Enter here: "));
        switch (itemCategory) {
          case 1:
            foodList.push("Burger ");
            priceTotal += 120;
            break;
          case 2:
            foodList.push("Fries ");
            priceTotal += 80;
            break;
          case 3:
            foodList.push("Hotdog ");
            priceTotal += 100;
            break;
          case 4:
            foodList.push("Soda ");
            priceTotal += 20;
            break;
          case 5:
            foodList.push("Dessert ");
            priceTotal += 80;
            break;
          default:
            console.log("Invalid number entered");
        }
        addMore = Number(prompt_cs("Press 0 to add more items: "));
      } while (addMore === 0);
      break;
    case 3:
      do {
        console.log("Press 1 for Pasta");
        console.log("Press 2 for Pizza");
        console.log("Press 3 for Salad");
        console.log("Press 4 for Breadsticks");
        console.log("Press 5 for Dessert");
        itemCategory = Number(prompt_cs("Enter here: "));
        switch (itemCategory) {
          case 1:
            foodList.push("Pasta ");
            priceTotal += 120;
            break;
          case 2:
            foodList.push("Pizza ");
            priceTotal += 90;
            break;
          case 3:
            foodList.push("Salad ");
            priceTotal += 80;
            break;
          case 4:
            foodList.push("Breadsticks ");
            priceTotal += 60;
            break;
          case 5:
            foodList.push("Dessert ");
            priceTotal += 70;
            break;
          default:
            console.log("Invalid number entered");
        }
        addMore = Number(prompt_cs("Press 0 to add more items: "));
      } while (addMore === 0);
      break;
    case 4:
      do {
        console.log("Press 1 for Noodles");
        console.log("Press 2 for Manchurian");
        console.log("Press 3 for Fried Rice");
        console.log("Press 4 for Spring Rolls");
        console.log("Press 5 for Dessert");
        itemCategory = Number(prompt_cs("Enter here: "));
        switch (itemCategory) {
          case 1:
            foodList.push("Noodles ");
            priceTotal += 110;
            break;
          case 2:
            foodList.push("Manchurian ");
            priceTotal += 130;
            break;
          case 3:
            foodList.push("Fried Rice ");
            priceTotal += 120;
            break;
          case 4:
            foodList.push("Spring Rolls ");
            priceTotal += 90;
            break;
          case 5:
            foodList.push("Dessert ");
            priceTotal += 80;
            break;
          default:
            console.log("Invalid number entered");
        }
        addMore = Number(prompt_cs("Press 0 to add more items: "));
      } while (addMore === 0);
      break;
    default:
      console.log("Invalid number entered");
  }
  if (priceTotal) {
    console.log("You have ordered: " + foodList);
    priceTotal += Math.trunc(priceTotal * (gst / 100))
    console.log("Total Bill: " + priceTotal);
  }
  tryAgain = Number(prompt_cs("Press 0 to Re-Order: "));
} while (tryAgain === 0);