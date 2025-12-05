/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    for (
      let numberIndex = index + 1;
      numberIndex < nums.length;
      numberIndex++
    ) {
      if (num + nums[numberIndex] === target) {
        return [index, numberIndex];
      }
    }
  }
};
