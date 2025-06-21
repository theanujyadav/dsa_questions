class Solution:
    def solve(self, digits, output, index, ans, mapping):
        # Base case
        if index >= len(digits):
            ans.append(output)
            return
        
        number = int(digits[index])
        value = mapping[number]
        
        for i in range(len(value)):
            output += value[i]
            self.solve(digits, output, index + 1, ans, mapping)
            output = output[:-1]  # Backtrack by removing the last character
    
    def letterCombinations(self, digits):
        ans = []
        if len(digits) == 0:
            return ans
        
        output = ""
        index = 0
        mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
        
        self.solve(digits, output, index, ans, mapping)
        return ans

sol = Solution()
print(sol.letterCombinations('23'))