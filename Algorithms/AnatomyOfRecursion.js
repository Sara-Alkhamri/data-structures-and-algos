//Recusrion Rules:
//1. Identify the base case.
//2. Identify the recusrive case.
//3. Get closer and closer and return when needed. Usually you have two returns.


let counter = 0;

function inception() {
    console.log(counter)
    if (counter > 3) {
        return 'done!'
    }
    counter++
    inception();
}