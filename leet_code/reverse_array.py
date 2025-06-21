def reverse_array(arr: list, m: int):
    s = m+1
    e = len(arr) -1
    
    while s <= e:
        swap(arr[s],arr[e])
        s += s
        e -= e
    