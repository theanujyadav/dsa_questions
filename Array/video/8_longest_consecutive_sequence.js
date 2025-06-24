function longest_consecutive(arr){
 let set_= new Map()

    for(let i =0; i < arr.length; i++){
        set_.set(arr[i], true)
    }

    total_count = 0
    for (let [key, value] of set_) { 
        let count = 1
        if (!set_.get(key - 1)){
            // it means it a starting  because to less value is present
            while(set_.get(key+count)){
                // counter++
                count++
            }
        }
        total_count = Math.max(total_count, count)
    }
return total_count
}



let arr = [1, 9, 3, 10, 4, 20, 2]
console.log("OUTPUT", longest_consecutive(arr))