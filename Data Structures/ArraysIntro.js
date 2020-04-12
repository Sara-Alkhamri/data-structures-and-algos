// Arrays:

// - Organize items sequentially (one after another).
// - Arrays are the simpliest and most used Data Structures.
// - Because Arrays are stored in order, they have the smallest footprint of any Data Structures.
// - If all we need is to store some data, and iterate over it (go one by one), Arrays are the best choice. (esp. if we know the indices of the items we are storing).
// - Some Array methods: 
//     - lookup O(1) //constant time. super fast
//     - push O(1)
//     - insert O(n) //linear time
//     - delete O(n)

//Example:

const strings = ['a', 'b', 'c', 'd'];

//4*4 = 16 bytes of storage

strings[2] //O(1) because we know exactly where it is in memory.

//push (adding an item to end of array)
strings.push('e'); //addes 'e' to array and is a O(1) because we are only adding an item to the array and NOT iterating over the array.

//pop (deleting the last item in the array)
strings.pop(); //also a O(1) because we are not iterating through the array.    

//unshift (adding an item to the "begining" of an array)

strings.unshift('x') //O(n) becuase we iterate through the array to rearrange indexes

//splice (add something in the middle of an array)

strings.splice(2, 0, 'alien') //first param is the start number (which array index)
                 //second param is the delete count (what to delete or how many things of the index to delete, 0 if nothing)
                 //third param is the item we want to add.
                 //O(n/2) becuase we did half of operations because we changed or looped through half of the array. 
                 //Because of Big O rules to remove constants and simplify, it becomes O(n) 