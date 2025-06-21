

def swap(arr,i,j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr


class Solution(object):
    def solve (self,nums, ans, index):

        if index >= len(nums):
            
            ans.append(nums)
            
            return
        print("LO",index)
        j = index
        while j < len(nums):
            nums = swap(nums,index,j)
            print("LOLO",nums, index, j)
            index = index +1
            self.solve(nums,ans,index)
            nums = swap(nums,index,j)
            
            j = j+1
            

    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        ans = []
        index = 0
        self.solve(nums,ans,index)
        print(ans)
        return ans

sol = Solution()
int = [1,2,3]
sol.permute(int)        