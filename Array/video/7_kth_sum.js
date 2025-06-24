function kth_sum(arr, k){
    prefix_sum = []
    prefix_sum[0] = arr[0]
    // calculate the sum prefix 
    for(let i =1 ; i< arr.length; i++){
        prefix_sum[i] = prefix_sum[i-1] + arr[i]
    }

    let map = new Map()
    count = 0
    console.log("prefix_sum", prefix_sum)
    for ( j=0; j < prefix_sum.length; j++){
        if ( prefix_sum[j] == k ){
            count ++
        } 

        diff = prefix_sum[j] - k
        console.log("diff", diff)
        if (map.get(diff)){

            console.log("found")
            count = count + map.get(diff)
        }else{
            map.set(prefix_sum[j], 0)
        }

        map.set(prefix_sum[j], map.get(prefix_sum[j])+1)
        console.log(map)
    }

    return count
}
    
    
    arr =  [4, 2, 0, 1, 6]
    console.log(kth_sum(arr, 0))