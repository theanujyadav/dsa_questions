
function sort_0_1_2(){
    low = 0
    mid = 0 
    high = arr.length

    while ( mid<high){
        if (arr[mid] == 0){
            swap(arr[low], arr[mid])
            low++
            mid++

        } else if (arr[mid] == 1){
            mid++
        }else{
            // for 2
            swap(arr[mid], arr[high])
            high--
        }
    }
}


arr = [2,2,2,1,1,1,0,0,0]

console.log(arr)