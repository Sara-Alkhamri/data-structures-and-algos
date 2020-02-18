// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; //O(1) only runs once
    a = 50 + 3; //reassigning a. Also an O(1)
  
    for (let i = 0; i < input.length; i++) { //O(n) because loops are linear time
      anotherFunction(); //this function depends on the loop therefore it is an O(n)
      let stranger = true; //this will run as many times as the for loop so it is O(n)
      a++; //will increment the variable a by 1 and will keep incrementing with the loop
    }
    return a; //only runs once so it is Constant time or O(1)
  }

  //So the Big O for this function is (3 + 4n)

  //That is 3 Constant Time and 4 linear

  //------------------------------------------------>

  // What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1; //O(n)
      let y = i + 2; //O(n)
      let z = i + 3; //O(n)
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2; //O(n)
      let q = j * 2; //O(n)
    }
    let whoAmI = "I don't know"; //O(1)
  }

  //Big O(4 + 5n)