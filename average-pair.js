// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
    if(!arr.length) return false;

    let left = 0;
    let right = arr.length -1;

    while(left < right) {
        let currAvg = (arr[left] + arr[right]) / 2;

        if(currAvg === targetAvg) return true;
        else if(currAvg < targetAvg) left++;
        else right--; 
    }
    return false;
}

module.exports = averagePair;
