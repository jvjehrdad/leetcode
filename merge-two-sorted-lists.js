/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const arr1 = [];
  const arr2 = [];

  while (list1 !== null) {
    arr1.push(list1.val);
    list1 = list1.next;
  }

  while (list2 !== null) {
    arr2.push(list2.val);
    list2 = list2.next;
  }

  const mergedArray = [...arr1, ...arr2];
  const sortedArray = [];

  while (mergedArray.length > 0) {
    let minIndex = 0;

    for (let i = 1; i < mergedArray.length; i++) {
      if (mergedArray[i] < mergedArray[minIndex]) {
        minIndex = i;
      }
    }

    sortedArray.push(mergedArray[minIndex]);
    mergedArray.splice(minIndex, 1);
  }

  let dummy = new ListNode(0);
  let current = dummy;

  for (let i = 0; i < sortedArray.length; i++) {
    current.next = new ListNode(sortedArray[i]);
    current = current.next;
  }

  return dummy.next;
};
