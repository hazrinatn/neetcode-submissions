class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLength = 0;
        let hashTable = new Set(nums);

        for (const value of hashTable) {
            if (!hashTable.has(value - 1)) {
                let length = 1;
                let current = value;

                while (hashTable.has(current + 1)) {
                    length++;
                    current++;
                }

                maxLength = Math.max(length, maxLength)
            }
        }
        return maxLength;

    }
}
