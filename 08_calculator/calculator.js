const add = function(a,b) {
	if (a == NaN || b == NaN) return;
  return a + b;
};

const subtract = function(a,b) {
	if (a == NaN || b == NaN) return;
  return a - b;
};

const sum = function(numArray) {
	return numArray.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0)
};

const multiply = function(numArray) {
  return numArray.reduce((a,b) => a * b, 1)
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  if (a === 0) return 1;
  let total = 1
  for (let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
