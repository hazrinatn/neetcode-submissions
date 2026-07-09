class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        class Stack {
            constructor() {
                this.data = [];
            }

            push(element) {
                this.data.push(element);
            }

            pop() {
                if (this.data.length > 0) {
                    return this.data.pop();
                } else {
                    return null;
                }
            }

            read() {
                if (this.data.length > 0) {
                    return this.data[this.data.length - 1]
                } else {
                    return null;
                }
            }
        }

        class checkValid {
            constructor() {
                this.stack = new Stack();
            }

            check(text) {
                while (this.stack.read()) {
                    this.stack.pop();
                }

                let matchingBraces = {"(": ")", "[": "]", "{": "}"};
                for (const char of text) {
                    if (matchingBraces[char]) {
                        this.stack.push(char);
                    } else if (Object.values(matchingBraces).includes(char)) {
                        if (!this.stack.read()) {
                            return false
                        } else {
                            const poppedOpeningBrace = this.stack.pop();
                            if (char !== matchingBraces[poppedOpeningBrace] ) {
                                return false
                            }
                        }
                    }
                }

                if (this.stack.read()) {
                    return false;
                }

                return true;
            }
        }

        const isValid = new checkValid()
        return isValid.check(s)
    }
}
