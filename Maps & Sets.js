/*Map: Same as objects but the difference is maps key value acn be anything(int,string or anything) where as key in objects are only string
*/

//let arr=new Array() (Another way of declaring an array in JS)

let a=new Map()//map declaration

a.set(1,20)
a.set('a',50)
.set('c',40)
.set(3,65)
console.log(a.get(3))

console.log(a.has(3))//key value only 
console.log(a)//size of the map
console.log(a.size)
 a.delete('c')//delete a value in map
 console.log(a)

 //for printing key in a map 
for(let k of a.keys()){
    console.log(k)
}

//for printing values in a map 
for(let v of a.values()){
    console.log(v)
}

//for printing key and values in a map 
for(let [k,v] of a.entries()){
    console.log(`${k} ${v}`)
}

a.clear()//delete all the values of a map
console.log(a)


/*Sets:dont allow duplicate all the elemants are unique */

let s=new Set()
s.add(10)
.add(20)
.add(20)
.add(30)
.add('Ohith')//add an elemet
.add('Gopal')
console.log(s)
s.delete(20)//delete an elemet
console.log(s)
console.log(s.size)//length of set
console.log(s.has(30))//check weater there exist an element

//print all the existing elemt of the set 
for(let i of s){
    console.log(i)
}

s.clear()//delete all the elements in a set
