// 1. Check whether a given number is integer or not.
let num = 10;
console.log(Number.isInteger(num));

// 2. Convert a string "123.45" into a number using different methods.
let str = "123.45";
console.log(Number(str));
console.log(  parseFloat(str));
console.log( +str);

// 3. Find the type of NaN and check if a value is NaN.
console.log(typeof NaN);
console.log(isNaN(NaN));

// 4. Round a number 4.7 to the nearest integer.
console.log(Math.round(4.7));

// 5. Round 4.2 down and 4.8 up using Math methods.
console.log(Math.floor(4.2));
console.log(Math.ceil(4.8));

// 6. Convert a number to a fixed 2 decimal places.
let num1 = 12.3456;
console.log(num1.toFixed(2));

// 7. Find the absolute value of -25.
console.log(Math.abs(-25));

// 8. Check whether a number is finite.
console.log(Number.isFinite(100));

// 9. Convert a number 10 into a string.
console.log((10).toString());

// 10. Find the maximum of 10, 5, 8, 20.
console.log(Math.max(10, 5, 8, 20));

// 11. Find the minimum of 3, 7, 1, 9.
console.log(Math.min(3, 7, 1, 9));

// 12. Generate a random number between 0 and 1.
console.log(Math.random());

// 13. Generate a random integer between 1 and 10.
console.log(Math.floor(Math.random() * 10) + 1);

// 14. Check whether a number is positive, negative, or zero.
let num2 = -5;

if (num2 > 0) {
  console.log("Positive");
} else if (num2 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 15. Convert a floating number to integer without rounding.
console.log(Math.trunc(12.89));

// 16. Find the square root of a number.
console.log(Math.sqrt(25));

// 17. Find the power of a number (2³).
console.log(Math.pow(2, 3));

// 18. Round a number to 2 decimal places.
let num3 = 5.6789;
console.log(Number(num3.toFixed(2)));

// 19. Generate a random integer between 50 and 100.
console.log(Math.floor(Math.random() * 51) + 50);

// 20. Calculate the ceil and floor difference of a number.
let num4 = 4.6;
console.log(Math.ceil(num4) - Math.floor(num4));

// 21. Check whether a number is even or odd using Math.
let num5 = 7;

if (Math.abs(num5) % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 22. Find the sum of digits of a number.
let num6 = 1234;

let sum = num6
  .toString()
  .split("")
  .reduce((a, b) => a + Number(b), 0);

console.log(sum);

// 23. Reverse a number using Number methods.
let num7 = 12345;

let reverse = Number(
  num7.toString().split("").reverse().join("")
);

console.log(reverse);

// 24. Check if a number is a palindrome.
let num8 = 121;

let rev = Number(
  num8.toString().split("").reverse().join("")
);

console.log(num8 === rev);

// 25. Find the factorial of a number.
let num9 = 5;
let fact = 1;

for (let i = 1; i <= num9; i++) {
  fact *= i;
}

console.log(fact);

// 26. Check if a number is prime.
let num10 = 7;
let prime = true;

for (let i = 2; i < num10; i++) {
  if (num10 % i === 0) {
    prime = false;
    break;
  }
}

console.log(prime);

// 27. Find the GCD (HCF) of two numbers.
let a = 12;
let b = 18;

while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}

console.log(a);

// 28. Find the LCM of two numbers.
let x = 12;
let y = 18;

let a1 = x;
let b1 = y;

while (b1 !== 0) {
  let temp = b1;
  b1 = a1 % b1;
  a1 = temp;
}

let gcd = a1;
let lcm = (x * y) / gcd;

console.log(lcm);

// 29. Truncate the decimal part of a number.
console.log(Math.trunc(12.99));

// 30. Find the random OTP of 6 digit.
console.log(
  Math.floor(100000 + Math.random() * 900000)
);

// 31. Check if a number is a perfect square.
let num11 = 49;

console.log(
  Number.isInteger(Math.sqrt(num11))
);

// 32. Check if a number is an Armstrong number.
let num12 = 153;

let armstrong = num12
  .toString()
  .split("")
  .reduce((a, b) => a + Math.pow(Number(b), 3), 0);

console.log(armstrong === num12);

// 33. Find the maximum value of a safe integer in JavaScript.
console.log(Number.MAX_SAFE_INTEGER);

