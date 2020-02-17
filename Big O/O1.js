
//function below receives an array of boxes and grabs only the first item in that array.

//the number of operations here will not increase with the size of the array. It will always grab the first item only.

//This is O(1) Constant Time big O notation. 

//inputs can be any type of data, not just arrays.

//O(1) is scalable becuase it doesn't matter how many elements we have because it will always run the same which means it is predictable

function compressFirstBox(boxes) {
    console.log(boxes[0])
}

//---------------------------------------------------

//The function below runs TWO operations in total or O(2) so no matter how big our array of boxes gets, the function will only logs 
//the first two elements.
const boxes = [1, 2, 3, 4, 5]

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]) //O(1)
}

logFirstTwoBoxes(boxes)