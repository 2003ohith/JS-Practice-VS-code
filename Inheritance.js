/*Inheritance:Inheritance is a method through which the objects inherit the properties and the methods from the other objects
extends keyword
code reusability */

/*
class Parents{

    constructor(a,b){
        this.father=a;
        this.mother=b;
    }

    display(){
        console.log(`Hi my name is ${this.name} and my parents are ${this.father} and ${this.mother}`)
    }
}

class Ohith extends Parents{
    name='Ohith'
}

class lokesh extends Parents{
    name='Loki'
}

let o=new Ohith('Venu','Neela');
o.display();

let l=new lokesh('Durairaj','Priya')
l.display();
*/

//Super constructor:If the child class extends parent class and has a constructor to be written it should have a super function called inside constructor
//there is no concept of constructor overloading in Javascript
//super refers to immediate parent class 

/*
class Parents{

    constructor(a,b){
        this.father=a;
        this.mother=b;
    }

    display(){
        console.log(`Hi my name is ${this.name} and my parents are ${this.father} and ${this.mother}`)
    }
}

class Ohith extends Parents{
    
   
    constructor(a,b,name){
        super(a,b)//goes to parent class constructor and assigs the values 
        this.name=name
    }
        
}

class lokesh extends Parents{
    constructor(a,b,name){
        super(a,b)// Parent(a,b) which inturn means//constuctor(a,b)
        this.name=name
}
}

let o=new Ohith('Venu','Neela',"ohith");
o.display();

let l=new lokesh('Durairaj','Priya','Loki')
l.display();
*/

//overriding in inheritance


class Parents{

    constructor(a,b){
        this.father=a;
        this.mother=b;
    }

    display(){
        console.log(`Hi my name is ${this.name} and my parents are ${this.father} and ${this.mother}`)
    }
}

class Ohith extends Parents{
    
    constructor(a,b,name){
        super(a,b)//goes to parent class constructor and assigs the values 
        this.name=name
    }
        display(){
            console.log("This from overriding method")
            console.log(`Hi my name is ${this.name} and my parents are ${this.father} and ${this.mother} and I am the luckiest one `)

        }
}

class lokesh extends Parents{
    constructor(a,b,name){
        super(a,b)// Parent(a,b) which inturn means//constuctor(a,b)
        this.name=name
}
}

let o=new Ohith('Venu','Neela',"ohith");
o.display();

let l=new lokesh('Durairaj','Priya','Loki')
l.display();
