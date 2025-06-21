function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function swap_alternate(arr) {
    let i = 0;
    while (i + 1 < arr.length) {
        swap(arr, i, i + 1);
        i += 2;
    }
    return arr;
}

q
console.log(swap_alternate(arr)); // Output: [2, 1, 4, 3, 5]
arr = [1, 2, 3, 4, 5, 6];
console.log(swap_alternate(arr)); // Output: [2, 1, 4, 3, 6, 5]