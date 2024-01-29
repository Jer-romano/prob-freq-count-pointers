// add whatever parameters you deem necessary
function separatePositive(arr) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let posIdx = 0;
    let negIdx = arr.length-1;

    while(posIdx < negIdx) {
        if(arr[posIdx] < 0 && arr[negIdx] > 0) {
            swap(arr, posIdx, negIdx);
            posIdx++;
            negIdx--;
        }
        else if(arr[posIdx] > 0 && arr[negIdx] > 0) {
            posIdx++;
        }
        else if(arr[posIdx] < 0 && arr[negIdx] < 0) {
            negIdx--;
        }
        else {
            posIdx++;
            negIdx--;
        }
    }
    return arr;

}
module.exports = separatePositive;
