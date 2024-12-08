let d=new Date()
console.log(d.getFullYear())
console.log(d)
console.log(d.getMonth()+1)
console.log(d.getDay())
console.log(d.toLocaleDateString())
console.log(d.toLocaleTimeString())
d.setFullYear(2025)
d.setDate(15)
d.setMonth(2)
console.log(d.getFullYear())
console.log(d)
d.setDate(d.getDate()+30)
console.log(d)

//day of the week

let a=new Date();
a.setDate(a.getDate()+1)
let b=a.getDay();


switch (b){
    case 0:
        console.log('Sunday')
        break;
    case 0:
        console.log('Sunday')
        break;
        case 1:
            console.log('monday')
            break;
            case 2:
                console.log('tuesday')
                break;
                case 3:
                    console.log('wednesday')
                    break;
                    case 4:
                        console.log('thursday')
                        break;
                        case 5:
                            console.log('friday')
                            break;
                            case 6:
                                console.log('saturday')
                                break;
                                default:
                                    console.log('Invalid date key')
                                                                                    

}


/*Spread operator--denoted by threee dots(...)used to unpack elemtes of an array or string or object
                   they are used for combining multiple array or string or objects and also used for appending elements to the same array or string or object 
                  Spread operator creates a shallow copy: It doesn’t clone nested objects or arrays.
                   */

let Arr1=[1,2,3,4,5]
let Arr2=[7,8,9,10]
console.log(Arr1)//before spread output:[1,2,3,4,5]
console.log(...Arr1)//after spread output: 1 2 3 4 5
console.log(...Arr2,...Arr1)//combining
//Adding few more elements to the existing array 
console.log(Arr2)
Arr2=[...Arr2,99,45,72]
console.log(Arr2)
console.log(Arr2.length)

//Spread in Strings
let s='Hello'
console.log(...s)//spread a string
let Str1=['Ohith','Lokesh','Gunal']
let Str2=['Azar','Nafiz','Abu','Roy']
console.log(Str1)//before spread output:[1,2,3,4,5]
console.log(...Str1)//after spread output: 1 2 3 4 5
console.log(...Str2,...Str1)//combining
//Adding few more elements to the existing array 
console.log(Str2)
Str2=[...Str2,'a','b','c']
console.log(Str2)
console.log(Str2.length)

//Sprad in Objects

let o1={
    name:'Ohith',
    age:21,
    work:'Tester'
}

let o2={
    name:'anil',
    age:47,
    work:'postman',
    salary:45000
}

//console.log(...Object.entries(o1))

o2={...o2,...o1}//if the keys are same the values of final object will be overriden with the first object keys
console.log(...Object.entries(o2))
console.log(o2,o1)

//copying(without any references means change in values of object1 will not affect object 2)
let o3={
    name:'dani',
    age:20,
    work:'student',
}

let o4={...o3}
console.log(o3,o4)// output:{ name: 'dani', age: 20, work: 'student' } { name: 'dani', age: 20, work: 'student' }
o4['age']=60;
o4.city='kochin'
console.log(o3,o4)// output:{ name: 'dani', age: 20, work: 'student' } { name: 'dani', age: 60, work: 'student', city: 'kochin' }