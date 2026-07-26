/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }  

    let leftDigit;
    let rightDigit;

    for (let i = 0; i < Math.floor(Math.log10(x) + 1) / 2; i++) {
        leftDigit = Math.floor(x / Math.pow(10, Math.floor(Math.log10(x)) - i)) % 10;
        rightDigit = Math.floor(x / Math.pow(10, i)) % 10;
        if (leftDigit !== rightDigit) {
            return false;
        }
    }   
    return true;
};