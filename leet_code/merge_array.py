def merge(arr1: list, arr2: list, arr3: list):
    i = 0
    j = 0
    k = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i]< arr2[j]:
            arr3[k] = arr1[i];
            k += k
            i += i
        else:
            arr3[k] = arr2[j]
            k += k
            j += j
    
    while i < len(arr1):
        arr3[k] = arr1[i]
        k += k
        i += i
    while j < len(arr2):
        arr3[k] = arr2[j]
        k += k
        j += j
        
        
    
            