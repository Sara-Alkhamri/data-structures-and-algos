//refrence type


//context vs scope

//scope is created when it sees {}
//when you create a new function a new scope is created
function a() {
    let a = 3;      //function scope
}
// root scope


//the key word "this" in Js refers to the object it is inside of.




//instantiation
//instantiation is when you make a copy of an object and reuse the code.

class Player {
    constructor(name, type) {
        console.log('Player', this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player {       //wizard will add on top of player, hence "extends"
    constructor(name, type) {
        super(name, type)           //anytime we extend, we need to call the constructor function of the class we are extending
        console.log('Wizard', this)                            // we call "super" with the props we want to pass to the constructor, so that we can have access to those props.
    }
    play() {
        console.log(`Weeee I'm a ${this.type}`)
    }
}

//now we are able to to create new players without having to code all the above over and over
const wiz = new Wizard('Sara', 'Healer');
const wizard2 = new Wizard('Prada', 'Dark Magic');