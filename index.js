// const sales = [120, 150, 180, 200, 175, 140, 160, 10000, 30000, 30000, 5000];
// const expenditure = [200, 1000, 1800, 200, 175, 140, 160, 10000, 30000, 5000];


// const calculateSales = function (sales) {
//   let totalSales = 0;

//   for (let i = 0; i < sales.length; i++) {
//     totalSales += sales[i];
//   }
//   return totalSales;
// };

// let mySales = calculateSales(sales);
// let mySpending = calculateSales(expenditure);
// let profit = mySales - mySpending;

// console.log({
//   mySales,
//   mySpending,
//   profit
// });

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// for (let vic in person) {
//   console.log({
//     vic,
//     val: person[vic],
//   });
// }


// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 3 === 0) {
//     console.log("fizz");
//   }
// }


// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(function (number) {
//   sum += number;
// });
// console.log(sum);

// for (let i = 0; i < numbers.length; i++) {
//   console.log("the old loop");
//   console.log(numbers[i]);
// }


// for (let i = 0; i < 10; i++) {
//   if (i === 5 || i === 6 || i === 7) {
//     continue;
//   }
//   console.log(i);
// }

// function divide(num1, num2) {
//   if (num2 === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return num1 / num2;
// }

// try {
//   let result = divide(10, 2);
//   console.log("Result:", result);
// } catch (error) {
//   console.error("Error:", error.message);
// }

// divide();


// Alogorithms

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) { // check if the two numbers add up to the target
        return [i, j]; // if so, return their indices
      }
    }
  }
  return null; // if there are no two numbers that add up to the target, return null
}



let arr = [1, 2, 3, 5, 7, 11];
let target = 8;

let answer = twoSum(arr, target);
console.log(answer);
