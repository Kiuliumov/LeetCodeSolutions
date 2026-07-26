/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for(let i = 0; i < s.length; i++) {
        const curr = s[i];
        if(map[curr]) {
            stack.push(curr);
            continue;
        } 
        
        if(stack.length === 0 || map[stack.pop()] !== curr) {
            return false;
        }
    }

    return stack.length === 0;
};