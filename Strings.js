//Strings:sequence of one or more characters that may consist of letters, numbers, or symbols enclosed within single or Double Quotes and are immutable
let a='Ohith'
console.log(a.charAt(1))//returns the character of the mentioned index number of the string
console.log(a.indexOf('h'))//returns the index value of first occurence 
console.log(a.lastIndexOf("h"))//return tha last occurence index value 
console.log(a.length)//length of string
console.log(a.toUpperCase())//to upper case
console.log(a.toLowerCase())//to lower case
console.log(a.repeat(3))
console.log(a.startsWith('d'))//returns true or false
console.log(a.endsWith('d'))
console.log(a.includes('i'))
console.log(a.replaceAll('h'," "))
console.log(a.padStart(20,"X"))//adds element to the start until the specified length
console.log(a.padEnd(20,"X"))//adds element to the end until the specified length
console.log(a.search('z'))//return the index value if its present else -1
console.log(a.split(""))//split based on the value into an char array
console.log(a.substr(1,3))//same like split but we specify the start index and no of characters
console.log(a.substring(1,3))//same as slice vomits the last index value (last Index mentioned-1)


//String slicing if slice(1,3) it vomits the last index value(last Index mentioned-1)
let b='Ohith03@gmail.com'
let name=b.slice(0,b.indexOf("@"))
let lastpart=b.slice(b.indexOf("@")+1,)
console.log(name+" "+lastpart)
