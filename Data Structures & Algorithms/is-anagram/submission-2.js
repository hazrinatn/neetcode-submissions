class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }

        let mapS = new Map();
        for (const value of s) {
            mapS.set(value, (mapS.get(value) || 0) + 1);
        }

        let mapT = new Map();
        for (const value of t) {
          mapT.set(value, (mapT.get(value) || 0) + 1);
        }

        
        for (const [key, value] of mapT) {
            if (!mapS.has(key) || mapS.get(key) !== value) {
                return false
            }
        }

        return true;
    }
}
