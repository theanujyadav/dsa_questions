
function getDiff(arr, n, k  ){

    arr.sort();
    console.log(arr)
    let ans = arr[n-1]-arr[0]
    let smallest = arr[0] +k
    let largest = arr[n-1] - k
    let mi =0 
    let ma = 0
    console.log(ans, smallest, largest)
    for( let i = 0; i<n-1; i++){
        console.log("LOFSA", arr[i], arr[i+1])
        mi = Math.min(smallest, arr[i+1]-k)
        ma = Math.max(largest, arr[i] + k)
        if(mi < 0){
            continue
        }
        ans = Math.min(ans, ma-mi);
    }

    return ans
}

let arr = [5, 4, 3, 2, 1];
console.log(getDiff(arr, arr.length, 0));

