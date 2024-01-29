// add whatever parameters you deem necessary
function countPairs(arr, target) {
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length-1;
    let total = 0;

    while(left < right) {
        let currSum = arr[left] + arr[right];
        if( currSum === target) {
            total++;
            left++;
            right--;
        }
        else if(currSum < target) left++;
        else right--;
    }
    return total;
}
module.exports = countPairs;