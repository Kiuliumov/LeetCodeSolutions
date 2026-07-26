/**
 * Finds the longest palindromic substring in a string.
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const palindrome = s.slice(left, right + 1);

            if (palindrome.length > longest.length) {
                longest = palindrome;
            }

            left--;
            right++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);

        expandAroundCenter(i, i + 1);
    }

    return longest;
};