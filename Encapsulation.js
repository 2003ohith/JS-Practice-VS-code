//Encapsulation:bundling data and methods into a single unit This helps protect the object's internal state from being changed in ways that could break the program
//Getters & Setters


 class user{
    #age
    constructor(a,b,c,d){
        this._name=a,
        this.#age=b,
        this.salary=c,
        this.proffesion=d
    }

    
    set age(value){
        this.#age=value;
        console.log("this is from set age ")
    }
        

    get age(){
        console.log("this is get age method")
        return this.#age;
    }
    

    getage(){
        return this.#age
    }
 

 }
let s=new user('Ohith',21,50000,'Tester')
s._name='John'
s.age=45
console.log(s._name)
console.log(s.age)//as its private variable and on calling this...it directly goes to getter method
console.log(s.getage())


//java Implicit modifier conversion
/*
class user{
    #age
    constructor(a,b,c,d){
        this._name=a,
        this.#age=b,
        this.salary=c,
        this.proffesion=d
    }

    getage(){
        return this.#age
    }
 

 }
let s=new user('Ohith',21,50000,'Tester')
s._name='John'
s.age=45
console.log(s._name)
console.log(s.age)//thought the age is private js implicitly create a public variable(age)
                 // for that but it doesent overwrite the private variable value 45
console.log(s.getage())//here the original value is displayed and the value is still 21

*/

