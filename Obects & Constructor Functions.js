//Objects are collection related properties and methods of an entity
/*
let employee={name:"Ohith"}//inside parantheses followed by a key kay and a value Enclosed Within Single or Double Quotes
console.log(employee.name);
*/

//Objects better Example
/* objects key can be anything except numbers,it can be keywords too
   --objects basically dont allow spaced key but can be used if the key is enclosed within double quotes
   --If object key has sapce and enclosed within double quotes,it requires the key to be mentioned within double quotes enclosed by []
   --deleting an entity=Delete.entity name 
   --After declaring object adding entity requires[] and single quotes is mandiatory
   --In js For objects it doest need a class
*/

/*
let employee={
    "name v":"Ohith",
     age:21
    }
     console.log(employee['name v']) //only the name entity

    employee['salary']=100000; //adding a entity
    console.log(employee)//all the entity of the object
    delete employee.age;//delete an object
    console.log(employee)
    employee["name v"]='Naveen'//updating a value of an entity
    console.log(employee)

*/

//Constructor Function(New Keyword during initialization of object,mainly for Code reusibility)

function a(b,c,d,f,g){
    this.name=b,
    this.age=c,
    this.salary=d,
    this.designation=f,
    this.behavior=g,
    this.description=()=>{
        return `${this.name} is a ${this.behavior} being`;
    }

}
let o=new a('Ohith',21,5000000,"Tester","Good")
let j=new a("kevin",35,60000,"developer","bad")

console.log(j.description());
console.log(o.description());

//To print every single values in an Object (in) can be used 
for(key in o){
    console.log(`${key}-${o[key]}`)
}

//console.log(j.description('good')); //If this is not given in the return statement and function is passed with parameter it takes 
//argument inside the function
/*
function a(b,c,d,f,g){
    this.name=b,
    this.age=c,
    this.salary=d,
    this.designation=f,
    this.behavior=g,
    this.description=(behavior)=>{
        return `${this.name} is a ${behavior} being`;
    }

}
let j1=new a("kevin",35,60000,"developer","bad")
console.log(j1.description('good'));
*/

//To print every single values in an Object in can be used 
