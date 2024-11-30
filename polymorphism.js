/*Polymorphism:only method overriding is supported no method overloading or constructor overloading or overriding is supported in JS 
 */

class animal{

    constructor(a){
    this.name=a;
    }

    sound(){
        console.log(`${this.name} sound is generic sound`)
    }
}

class dog extends animal{
    constructor(a){
        super(a)

    }
   sound(){
        super.sound()//animal.sound()  /*calling the super class method into derived class method  */
        console.log(`${this.name} sound is wof woff`);
        
    }
}

let d= new animal('tiger');
d.sound();

let c= new dog('pug');
c.sound();