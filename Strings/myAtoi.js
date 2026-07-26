/**
 * Converts a string to a 32-bit signed integer.
 *
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    while (s[i] === ' ') {
        i++;
    }

    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') {
            sign = -1;
        }
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = Number(s[i]);

        result = result * 10 + digit;

        if (sign * result > INT_MAX) {
            return INT_MAX;
        }

        if (sign * result < INT_MIN) {
            return INT_MIN;
        }

        i++;
    }

    return result * sign;
};