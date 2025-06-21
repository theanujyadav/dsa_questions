def isPossible ( arr, member, mid):
    studentCount = 1
    pageSum = 0
    
    i = 0
    while i < len(arr):
        if pageSum + arr[i] <= mid:
            pageSum += arr[i];
        else:
            studentCount += studentCount 
            if studentCount > member or arr[i] > mid:
                return False
        i +=1
    return True
    
def allocateBooks(arr: list, member: int):
    
    start = 0
    sum = 0 
    for val in arr:
        sum += val
        
    end = sum
    ans = -1

    
    while start< end:
        
        mid = start + int((end-start)/2)
        
        if isPossible(arr,member,mid):
            ans = mid
            end = mid - 1
        else :  
            start = mid+1
    return ans

arr = [10,20,30,40]
print(allocateBooks(arr, 2))