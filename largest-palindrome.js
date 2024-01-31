function largestPalindromeProduct() {
  let largest = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      let product = i * j;
      let productStr = product.toString();
      let reverseStr = productStr.split("").reverse().join("");
      if (productStr === reverseStr) {
        if (product > largest) {
          largest = product;
        }
      }
    }
  }
  return largest;
}
const largestPalindrome = largestPalindromeProduct();
console.log(largestPalindrome);
