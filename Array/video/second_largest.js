function second_largest(arr){

    largest = arr[0]

    for(let i = 0;i < arr.length; i++ ){
        
        if (arr[i] > largest){
            largest = arr[i]
        }
    }
    second_largest = arr[0]
    for(let i = 0;i < arr.length; i++ ){
        
        if (arr[i] < largest && arr[i] > second_largest){
            second_largest = arr[i]
        }
    }

return  second_largest;
}

// optimal
function second_largest_optimal(arr){
    second_largest = -1
    largest = -1
    for(let i = 0;i < arr.length; i++ ){
        if (arr[i] > largest){
            second_largest = largest
            largest = arr[i]
        }else if (arr[i] > second_largest ){
            second_largest = arr[i]
        }
    }
return second_largest
}



arr = [7, 6, 5, 4, 3, 10];
console.log(second_largest(arr)); 
console.log("second_largest_optimal", second_largest_optimal(arr)); 