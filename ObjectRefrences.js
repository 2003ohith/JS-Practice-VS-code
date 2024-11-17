//object as a whole can be overwritten but if we change the refresh value(Value of property)it affectes the original object
//and the copy of the object

/*
let a={name:'Ohith',
    age:21,
    salary:450000,
}
let b=a;
console.log(a,b);
b={}
console.log(a,b)
*/

/* output:
 name: 'Ohith', age: 21, salary: 450000 } { name: 'Ohith', age: 21, salary: 450000 }
{ name: 'Ohith', age: 21, salary: 450000 } {}
 */

/*
let a={name:'Ohith',
    age:21,
    salary:450000,
}
let b=a;
console.log(a,b);
b={name:'John',
    age:35,
    
}
console.log(a,b)
*/

/*Output:
{ name: 'Ohith', age: 21, salary: 450000 } { name: 'Ohith', age: 21, salary: 450000 }
{ name: 'Ohith', age: 21, salary: 450000 } { name: 'John', age: 35 }
*/

/*
let a={name:'Ohith',
    age:25,
    Salary:450000,
}

let b=a;
console.log(a,b)
b.age=45;
console.log(a,b)
*/

/*Output:
{ name: 'Ohith', age: 25, Salary: 450000 } { name: 'Ohith', age: 25, Salary: 450000 }
{ name: 'Ohith', age: 45, Salary: 450000 } { name: 'Ohith', age: 45, Salary: 450000 }
  */

//object refrence for consts
 
const a={
    name:'Ohith',
    age:22,
    salary:10000,
}

//a={} //shows error as the overall value of the object
//console.log(a);

a['name']='vasuu' 
//a.name='Vasuu'// on changing the inside refrence values no error is shown though its a constant type
console.log(a)