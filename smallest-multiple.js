function smallestMultiple(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    let gcd = greatestCommonDivisor(result, i);
    result = (result * i) / gcd;
  }
  return result;
}

function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}

let smallest = smallestMultiple(20);

console.log(smallest);
