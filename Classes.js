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

class car{
    constructor(a,b,speed){
        this.model=a,
        this.price=b,
        this.c=speed,
       this.performance=function(c){
            return `the ${this.model}'s tops speed is ${this.c} so its a ${c} car `

        }
    }
    //static model='kia'

     looks(){
        return `${this.model} is great looking  With ${this.c} top Speed and its great`
    }

}

let o= new car("Nissan",1000000,"20000cc");
console.log(o.performance("badest"))
console.log(car.looks())
