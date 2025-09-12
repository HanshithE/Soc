function factorial(n) {
  if (n < 0) {
    return "error";
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(2)); 

let a = 10;

