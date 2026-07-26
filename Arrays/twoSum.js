/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    const numsDict = {};
    
    for(let i = 0; i < nums.length; i++){ 
       const complement = target - nums[i];
       if(complement in numsDict){
           return [numsDict[complement], i];
       }
         numsDict[nums[i]] = i; 
    }
};


/**
 * Finds two numbers in an array that add up to a given target value.
 *
 * The function uses a hash map to store numbers that have already been visited
 * along with their indices. For each number, it calculates the value needed to
 * reach the target (the complement) and checks whether that value has already
 * appeared in the array.
 *
 * This allows the function to find the pair in a single pass through the array.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} target - The target sum value.
 *
 * @returns {number[]} An array containing the indices of the two numbers that
 * add up to the target. Returns undefined if no valid pair exists.
 *
 * @example
 * // nums = [2,7,11,15], target = 9
 * // 2 + 7 = 9, so the output is [0,1]
 *
 * twoSum([2,7,11,15], 9);
 * // Returns: [0,1]
 *
 * @complexity
 * Time complexity: O(n), where n is the number of elements in nums.
 * Space complexity: O(n), due to the hash map storing visited numbers.
 */