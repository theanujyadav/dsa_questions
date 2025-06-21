def sumArray(arr):
    i = len(arr)
    if i <=0:
        return 0
    return arr[0] + sumArray(arr[1:i])
print(sumArray([1,2,3,4]))