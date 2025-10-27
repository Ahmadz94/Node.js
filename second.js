//אחמד זוביידאת - 313536633
// לרה חורי- 211565445

// checking if a number is prime
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//printing all prime numbers in the console(up to 237)
for (let i = 2; i < 237; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

