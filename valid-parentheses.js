/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const opposites = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (opposites[char]) {
      if (stack.pop() !== opposites[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
