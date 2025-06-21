def selection_sort(arr: list):
    i =0
    while(i<len(arr)):
        min = i
        
        j = i+1
        while(j<len(arr)):
            if (arr[j]< arr[min]):
                min = j
            j+=1

        # swap
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
        i +=1
    return arr
arr = [5,4,3,2,1]
print(selection_sort(arr))