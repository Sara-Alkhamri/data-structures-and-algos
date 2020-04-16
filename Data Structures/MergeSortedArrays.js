

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //check input
    if (array1.length === 0) { //checks if the array is empty
        return array2;
    }

    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item) //addes the first item in array 1 into the new array
            array1Item = array1[i]; //this will loop through the rest of the array 
            i++
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++
        }
    }
    return mergedArray;
}

mergeSortedArrays([0,3,4,31], [4,6,30]);