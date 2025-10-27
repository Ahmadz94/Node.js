const num = 30;
let result = 0;
(num % 2 == 0 || num % 3 == 0 || num % 5 == 0) && (result = 1);
((num % 2 == 0 && num % 3 == 0) ||
  (num % 5 == 0 && num % 3 == 0) ||
  (num % 5 == 0 && num % 2 == 0)) &&
  (result = 2);
num % 2 == 0 && num % 3 == 0 && num % 5 == 0 && (result = 3);
console.log(result);
