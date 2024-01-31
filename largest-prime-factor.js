function largestPrimeFactor(num) {
  let largest = 1;
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      num = num / i;
      largest = i;
    }
  }
  if (num > 1) {
    largest = num;
  }
  return largest;
}

let prime = largestPrimeFactor(600851475143);

console.log(prime);
