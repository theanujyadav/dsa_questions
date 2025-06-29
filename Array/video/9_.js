// Given an array of integers, in one operation you can merge two adjacent elements (i.e., replace them with their sum).
// You need to make the array a palindrome using the minimum number of such merge operations.


function minOperationsToPalindrome(arr) {
    let i = 0, j = arr.length - 1;
    let count = 0;

    while (i < j) {
        if (arr[i] === arr[j]) {
            i++;
            j--;
        } else if (arr[i] < arr[j]) {
            arr[i + 1] += arr[i];
            i++;
            count++;
        } else {
            arr[j - 1] += arr[j];
            j--;
            count++;
        }
    }
    console.log(arr)

    return count;
}

// Example usage:
const arr = [1,2 , 3, 5, 10, 1];
console.log("Minimum operations to make palindrome:", minOperationsToPalindrome(arr));
