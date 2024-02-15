const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start, end) {
  let modifiedFood = [];
  for (let i = start; i < end - 1; i++) {
    modifiedFood.push(foods[i]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}

// Progression 3:
function isEven(number) {
  return number % 2 == 0;
}
function isPrime(number) {
  if (number <= 1) {
    return false;
  } else if (number == 2) {
    return true;
  } else if (number % 2 == 0) {
    return false;
  }
  for (let i = 3; i <= Math.floor(number ** 0.5 + 1); i += 2) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function checkNumber(numberArray, operation) {
  let newFilteredArray = numberArray.filter(operation);
  return newFilteredArray;
}
// Progression 4:
function reject(numberArray) {
  return numberArray.filter((num) => !isPrime(num));
}

function nonPrime(numberArray) {
  return reject(numberArray);
}

// Progression 5:
let isEvenUsingLambda = (n) => n % 2 == 0;

// Progression 6:
function findSquareOfNumbers(myArray) {
  let squaredNumbers = myArray.map(function (num) {
    return num * num;
  });
  return squaredNumbers;
}

// Progression 7:
function multiply(myArray) {
  return myArray
    .map(function (element) {
      return element * 1;
    })
    .reduce(function (result, element) {
      return result * element;
    });
}

function sumOfSquares(myArray) {
  return myArray
    .map(function (element) {
      return element ** 2;
    })
    .reduce(function (output, element) {
      return output + element;
    });
}
