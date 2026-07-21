function isPalindrome(string) {
  // Start coding here
  let reverse = string.split('').reverse().join('')
  console.log(reverse)
  return string === reverse
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false