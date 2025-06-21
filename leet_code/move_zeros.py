def movezeros(arr: list):
    i = 0;
    j = 0
    
    while j < len(arr):
        if arr[j] != 0:
            swap(arr[j], arr[i])
            i += i
            j += j
            