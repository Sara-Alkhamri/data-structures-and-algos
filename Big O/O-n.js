const nemo = ['nemo'];

const large = new Array(1000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i ++) {
      if (array[i] === 'nemo') {
        console.log('Found Nemo!')
      }
    }
  }
  
  findNemo(large);

  //number of operations increases by number of elements in the array.

  //O(n) ----> linear time. The (n) can be anything and it means that the Big O depends on the number of inputs. So for the first nemo 
  //array, the n will equal 1 and for the large array, it will be 1000.

  //o(n) is the most common Big O notation 

  //Big O focuses on how quickly our run time grows. And it is done by using the size of the input(element) which is called (n) and comparing
  // it to the number of operations that increase.