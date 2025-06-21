def binary_search(number: int):
    start = 1
    end  = number
    
    while start < end:
        mid  = int(start + (end - start)/2)
        if mid*mid == number:
            return mid
        
        if mid*mid < number:
            ans = mid
            start = mid+1
        else:
            end = mid-1
    
    return ans

def more_precision(number: int, precision: int, tempSol: int):
    factor = 1
    ans = tempSol
    for i in range(precision-1):
        factor = factor/10
        j = ans
        while j*j< number:
            ans = j
            j = j+factor
    return ans 
route = 39
tempsol = binary_search(route)
print(more_precision(route, 3, tempsol))
