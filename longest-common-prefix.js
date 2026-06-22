/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const arrayOfString = [];
  let commonPrefix = '';

  for (let i = 0; i < strs.length; i++) {
    arrayOfString[i] = strs[i].split('');
  }
  for (let i = 0; i < arrayOfString[0].length; i++) {
    const char = arrayOfString[0][i];

    for (let j = 0; j < arrayOfString.length; j++) {
      if (arrayOfString[j][i] !== char) {
        return commonPrefix;
      }
    }

    commonPrefix += char;
  }

  return commonPrefix;
};
