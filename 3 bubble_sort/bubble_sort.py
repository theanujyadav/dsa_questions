
def swap(arr,i,j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr

def bubble_sort(arr: list):
    i = 0      
    while i < len(arr):
        j = 0
        while j < len(arr)-1:
            if arr[j]> arr[j+1]:
                swap(arr,j,j+1)
            j +=1
        i +=1
    return arr
arr = [5,4,3,2,1]
print(bubble_sort(arr))

