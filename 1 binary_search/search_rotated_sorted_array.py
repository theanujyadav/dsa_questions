def find_pivot(arr: list):
    start = 0
    end = len(arr)
    
    while  start < end:
        mid = int(start + (end - start)/2)
        print("SD",mid, start, end)
        if arr[mid] >= arr[0]:
            start = mid+1
        else:
            end = mid
    
    return start
def binary_search(arr: list, start: int, end: int, key ):
    start = start
    end = end
    while start<=end: 
        mid = int((start + end)/2)
        if key ==arr[mid]:
            return mid
        if arr[mid] > key:
            end = mid-1
        else:
            start = mid+1
    return -1

def find_position(arr: list, key: int):
    pivot = find_pivot(arr= arr)
    print(pivot)
    if key >= arr[pivot] and key <= arr[len(arr)-1]:
        print("LO")
        return binary_search(arr, pivot, len(arr)-1,key)
    else:
        return binary_search(arr,0, pivot-1,key)
    
arr = [18, 19, 20, 20, 20,21,22,1, 2, 3, 4, 4, 5, 5, 6, 9, 14, 14, 15, 17]
print(find_position(arr, 1))