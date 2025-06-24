function largest_sum(arr){
let sum = 0
let count = 0
for(let i = 0; i< arr.length; i++){
    if (sum + arr[i] > 0){
        sum  = sum + arr[i]
        count = Math.max(sum, count)
    }else{
        sum = 0
    }
}

return count
}


arr =  [2, 3, -8, 7, -1, 2, 3, -11, 11, 4]
console.log(largest_sum(arr))