class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        hashmap = {}

        for ind, num in enumerate(nums):
            complement = target - num
            if complement in hashmap:
                return [hashmap[complement], ind]
            hashmap[num] = ind
        