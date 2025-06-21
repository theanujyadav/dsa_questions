def binary_search(arr: list, key ):
    start = 0
    end = len(arr)-1
    while start<=end: 
        mid = int((start + end)/2)
        if key ==arr[mid]:
            return mid
        if arr[mid] > key:
            end = mid-1
        else:
            start = mid+1
    return -1
even = [1,3,4,6,7,8,10,111]

print("Indev of dun is ",binary_search(even, 4))
    