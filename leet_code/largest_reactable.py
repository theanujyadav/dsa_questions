class Solution(object):
    def largestRectangleArea(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
        ans = 0
        stack = [-1]
        min_number = []
        for i in range(len(heights)):
            if stack[len(stack)-1] < heights[-i]:
                
                print("true")
                stack.append(heights[-i])
            else :
                
        print(stack)
        return ans

sol = Solution()
print(sol.largestRectangleArea([2,3,4,5]))
        