//class in JS--Class is an template or a blueprint which provides more structured or cleaner way to work with objects
//             Unlike traditional constructor functions

/*
class car{
    constructor(a,b,speed){
        this.model=a,
        this.price=b,
        this.c=speed,
       this.performance=function(c){
            return `the ${this.model}'s tops speed is ${this.c} so its a ${c} car `

        }
    }

    looks(){
        return `${this.model} is great looking  With ${this.c} top Speed and its great`
    }

}

let o= new car("Nissan",1000000,"20000cc");
console.log(o.performance("badest"))
console.log(o.looks())
console.log(o.model)
*/


/*Static variable or method belongs to the class rather than instance of class(object)
if a variable or method is static then class can be the only entity to access it  */

/*
class car{

    static price=20000 //belongs to class car
    constructor(a,b,speed){
        this.model=a,
        this.price=b,
        this.c=speed,
       this.performance=function(c){
            return `the ${this.model}'s tops speed is ${this.c} so its a ${c} car `

        }
    }
    //static model='kia'

    static looks(model,c){
        return `${model} is great looking  With ${c} top Speed and its great with price ${this.price}`
        //this.price refers to car.price as its static variable

    }

}

let o= new car("Nissan",1000000,"20000cc");
console.log(o.performance("badest"))
console.log(car.looks('Kia','250'))//if the method is Static so we use class name

*/

/*
class car{

    static price=20000 //belongs to class car
    constructor(a,b,speed){
        this.model=a,
        this.price=b,
        this.c=speed,
       this.performance=function(c){
            return `the ${this.model}'s tops speed is ${this.c} so its a ${c} car `

        }
    }

    static looks(model,c){
        return `${model} is great looking  With ${c} top Speed and its great with price ${this.price}`
        

    }

}

let o= new car("Nissan",1000000,"20000cc");
console.log(o.performance("badest"))
console.log(car.looks(o.model,o.c))//if u like to use the object parameter in static method we can use class.method(object.parameter)
*/

//Another example from Internet(bro code)
class User{

    static userCount = 0;

    constructor(a){
        this.username = a;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

User.getUserCount();
user1.sayHello();
user2.sayHello();
user3.sayHello();
