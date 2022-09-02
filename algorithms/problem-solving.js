// // [0, 1, 1, 0, 2, 3] should return a sum of the unique values which is 4
// const func = (arr) => {
//   const oldNums = [];
//   arr.forEach((num) => {
//     if (!oldNums.includes(num)) oldNums.push(num);
//   });
//   return oldNums.length;
// };

// console.log(func([0, 1, 1, 0, 2, 3, 120, 1]));

// ***********************************************************

function linearSearch(arr, target) {
  let result = -1;
  arr.map((num, i) => {
    if (num === target) result = i;
  });
  return result;
}

console.log(linearSearch([1], 1));
