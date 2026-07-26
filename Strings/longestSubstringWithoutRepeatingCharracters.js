/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let start = 0;
    const currentSubstring = new Set();

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        while (currentSubstring.has(currentChar)) {
            currentSubstring.delete(s[start]);
            start++;
        }

        currentSubstring.add(currentChar);
        longest = Math.max(longest, currentSubstring.size);
    }

    return longest;
};
