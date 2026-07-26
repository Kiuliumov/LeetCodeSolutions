/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = carry;

        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummyHead.next;
};

/**
 * Adds two numbers represented by linked lists and returns the sum as a linked list.
 *
 * Each linked list stores digits in reverse order, where each node contains a single
 * digit. For example, [2,4,3] represents the number 342. The function adds the two
 * numbers digit by digit while keeping track of any carry value, similar to manual
 * addition.
 *
 * The result is also returned as a linked list in reverse order.
 *
 * @param {ListNode} l1 - The head node of the first linked list representing a non-negative integer.
 * @param {ListNode} l2 - The head node of the second linked list representing a non-negative integer.
 *
 * @returns {ListNode} The head node of a linked list representing the sum of the two numbers.
 *
 * @example
 * // l1 = [2,4,3] represents 342
 * // l2 = [5,6,4] represents 465
 * // Output: [7,0,8] represents 807
 *
 * addTwoNumbers(l1, l2);
 *
 * @complexity
 * Time complexity: O(n), where n is the length of the longer linked list.
 * Space complexity: O(n), for the resulting linked list.
 */