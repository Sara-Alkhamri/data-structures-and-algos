const nemo = ['nemo'];

const large = new Array(1000).fill('nemo'); //creates a new array of 1000 and fills it with 'nemo' and increased runtime.

//runtime depends on a lot of factors e.i how fast computer is, how many running programs etc.

function findNemo(array) {
  let t0 = performance.now(); //runs timer before loop below starts
  for (let i = 0; i < array.length; i ++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!')
    }
  }
  //runs timer when loop ends
  let t1 = performance.now();
  console.log('Call to find nemo took ' + (t1 - t0) + ' milliseconds')
}

findNemo(large);

//notes:

//Big O and scalability means: when we grow bigger and bigger with out input, how much does the algorithm slows down? The less it slows 
// down, the better it is.

//instead of using time (perfomance.now()) to measure the efficiency of our function, we can calculate how many operations a computer has 
// to perform because each operation takes time at a computer.

//So Big O concerns how many STEPS it takes in a function.
