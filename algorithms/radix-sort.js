// This method is to get the digit depand on the index from right to left
// e.g 12345 , idx = 0 ; I should get { 5 } not { 1 }
const getDigitDepandOnIdx = (num, i) => {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};

const countDigitNumber = (num) => {
  let stringNum = num.toString();
  return [...stringNum].length;
};

const numHasLargeDigits = (arr) => {
  let maxStringNum = "0";
  let newStringArray = arr.map((num) => {
    return num.toString();
  });
  newStringArray.forEach((stringNum) => {
    if (stringNum.length > maxStringNum.length) maxStringNum = stringNum;
  });

  return countDigitNumber(parseInt(maxStringNum));
};

const radixSort = (arr) => {
  // we need to know how many time we want to sort depand on the largest number in the array
  const timesToLoop = numHasLargeDigits(arr);
  // The first loop is to decide how many time we will sort
  for (let i = 0; i < timesToLoop; i++) {
    const digitArrays = Array.from({ length: 10 }, () => []);
    // The second loop is for to loop for all the numbers inside the array
    for (let j = 0; j < arr.length; j++) {
      // 123
      const digit = getDigitDepandOnIdx(arr[j] /* 123 */, i /* 0 */); // 3
      digitArrays[digit].push(arr[j]);
    }
    // re order the number in new array
    arr = [].concat(...digitArrays);
  }
  return arr;
};

const print = radixSort([123, 500000, 165, 1000]);
console.log(print);
