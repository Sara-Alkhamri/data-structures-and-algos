//log all pairs of array

const boxes = ["a", "b", "c", "d", "e"]


//nested loops
function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.lengtj; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsOfArray(boxes)

//in nested loops, we used multiplication instead of addition. 

//Big O here will be O(n * n) and after multiplication it will be O(n^2) O to the n to the power of 2.