//Arrays in JS are objects with intger based keys that act like indexes.

class MyArray {
    constructor() { //constructor is the initial function that would run
        this.length = 0; //initial array length
        this.data = {};  //the data in the array
    } 
    
    get(index) { //the get method will grab the data from memory
        return this.data[index] //will return the index we are requiring
    }

    push(item) {  //to add an item to the end of the array
        this.data[this.length] = item;  //the zero index will now have item
        this.length++ //if we want to keep adding items
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem;
    }

    delete(index) { //index is which item we want to delete
        const item = this.data[index]; //refrence to the item we want to delete
        this.shiftItems(index)
    }
    //adding this method because we need to shift items when we delete
    shiftItems(index) {                                 //here we are saying at the index we want to start the delete from
        for (let i = index; i < this.length - 1; i++)   //and iterate through it all the way to the end 
        {
            this.data[i] = this.data[i+1];              //and within this loop, take each item in the data we have, and replace it with the data
                                                        //right next to it [i+1]
            delete this.data[this.length-1];
            this.length--                                           
        }
    }        
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.delete(1);
console.log(newArray) //output will be: MyArray {length: 0, data: {…}}