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