def firstandLastPosition(arr: list, key : int):
    
    
    print("first_occurence",first_occurence(arr, key))
    print("lst_occurence",lst_occurence(arr, key))

def first_occurence(arr: list, key: int):
    start = 0
    end = len(arr) -1
    index = -1
    while (start<=end):
        mid = int((start + end)/2)
        print(start, end)
        if arr[mid] == key:
            index =  mid
            end = mid-1
        
        if (arr[mid] > key): 
            # Move to left
            end = mid-1
        else:
            start = mid +1
    
    return index

def lst_occurence(arr: list, key: int):
    start = 0
    end = len(arr) -1
    index = -1
    while (start<=end):
        mid = int((start + end)/2)
        if arr[mid] == key:
            index =  mid
            start = mid+1
        
        if (arr[mid] > key): 
            # Move to left
            end = mid-1
        else:
            start = mid +1
    
    return index
arr = [1, 2, 3, 4, 4, 5, 5, 6, 9, 14, 14, 15, 17, 18, 18, 18, 19, 20, 20, 20]

firstandLastPosition(arr, 20)