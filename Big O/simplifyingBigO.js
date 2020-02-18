//Big O Rule Book

//Rule 1: Worst Case.

//We always care about what is the worst case scenario becuase we can't assume thongs will go well i.e when running a for loop, we can't assume
//the item we are looking for will be the first in the array.

//So if we can't be certain what the input will be, we will assume the big O is O(n) or linear time.

//Rule 2: Remove Constants.

//Big-O notation doesn't care about constants because big-O notation only describes the long-term growth rate of functions, rather than their absolute magnitudes. Multiplying a function by a constant only influences its growth rate by a constant amount, so linear functions still grow linearly, 
//logarithmic functions still grow logarithmically, exponential functions still grow exponentially, etc. 
//Since these categories aren't affected by constants, it doesn't matter that we drop the constants.

//Rule 3: Different terms for inputs.

//Below fucntion loops twice over the boxes array.

//The Big O of this function will be O(2n) but because we know to drop the constants, it will be O(n)
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) { //loops over the first input
        console.log(boxes)
    })

    boxes2.forEach(function(boxes) { //loops over the second input
        console.log(boxes)
    })
}

// the big o for this function after adding a second param, will be O(boxes + boxes2)

//Rule 4: Drp non dominants 

function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are the numbers: ');
    numbers.forEach(function(number) {
        console.log(number);
    })

    console.log('and these are their sums: ');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        })
    })
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])

//the big o here will be O(n^2)