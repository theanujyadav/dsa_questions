function swap(arr, str, end ){
    let temp = arr[str]
    arr[str] = arr[end]
    arr[end] = temp
return arr
}
function reverse_array(arr){
    let i = 0
    let end = arr.length-1
    while(i < end){
        arr = swap(arr,  i, end)
        i++
        end--
    }
    return arr
}

let arr = [5, 4, 3, 2, 1];
console.log(reverse_array(arr));
