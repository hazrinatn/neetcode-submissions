class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let pairs = {'(': ')', '[': ']', '{': '}'};
        let stack = [];

        for (const char of s) {
            if (char in pairs) {
                stack.push(pairs[char]);
            } else {
                if (stack.pop() !== char) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
