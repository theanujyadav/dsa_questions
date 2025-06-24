function sort(arr, str, mid, end) {
    let i = str;
    let j = mid + 1;
    let final = [];
    let invt_count = 0;
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            final.push(arr[i]);
            i++;
        } else {
            final.push(arr[j]);
            j++;
            invt_count += (mid - i + 1);
        }
    }
    while (i <= mid) {
        final.push(arr[i]);
        i++;
    }

    while (j <= end) {
        final.push(arr[j]);
        j++;
    }
    for (let idx = 0; idx < final.length; idx++) {
        arr[idx + str] = final[idx];
    }
    return invt_count;
}


function merge_sort(arr, str, end) {
    if (str < end) {

        let mid = str + Math.floor(((end - str) / 2));

        let left_inv = merge_sort(arr, str, mid);
        
        let right_env = merge_sort(arr, mid + 1, end);
        let invert = sort(arr, str, mid, end);
        console.log(arr)
        return invert + left_inv + right_env;
    }
    return 0;
}


let arr = [5, 4, 3, 2, 1];
console.log(merge_sort(arr, 0, arr.length - 1));
console.log(arr); 