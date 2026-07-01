class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const word = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let leftIndex = 0;
        let rightIndex = word.length - 1;

        while (leftIndex < word.length/2) {
            if (word[leftIndex] !== word[rightIndex]) {
                return false
            }
            leftIndex++;
            rightIndex--;
        }

        return true;
    }
}
