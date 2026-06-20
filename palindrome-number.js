/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reverseNumber = (theNumber) => {
    const finalNumber = String(theNumber).split('').reverse().join('');
    return finalNumber;
  };

  const reversedNumber = reverseNumber(x);
  return reversedNumber == x;
};
