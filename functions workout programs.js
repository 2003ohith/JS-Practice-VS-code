//1.Write a JavaScript functions to reverse the given number.

/*
function reverse(n){
    let final=0;
    while(n>0){
        
        let a=n%10;
        n=Math.floor(n/10);
        final=final*10+a
    }
    return final
    }
     let n=+prompt();
     console.log(reverse(n))

     */

//2.Write a JavaScript functions to check the give string is palindrome or not.

/*
function ispalindrome(n){
    let final=0;
    let p=n;
    while(n>0){
        
        let a=n%10;
        n=Math.floor(n/10);
        final=final*10+a
    }
    if(p===final){
        return `${p} is palindrome`
    }else{
        return `${p} is not a palindrome `
    }
    }
     let n=+prompt();
     console.log(ispalindrome(n))

     */

//3.Write a JavaScript functions to check the give number is prime or not

/*
let result= (b)=>{
    let Count=1;
    for(let i=2;i<=b;i++){
        if(b%i==0){
            Count++;
        }
    }
    if(Count==2){
        return b+" is Prime";
    }
    else{
        return b+" is not Prime";
    }
}
console.log("Enter a number:");
let a=parseInt(prompt());
console.log(result(a));

*/

//4. Write a JavaScript function to get the number of occurrences of each letter in Specified String.

/*
function countletter(s){
    let a={}
    
    for(let i of s ){
        a[i]=(a[i] || 0)+1;
    }
    return a
}

let s=String(prompt())
let p=countletter(s)
console.log(p)
*/
/*
Certainly, let's break down a[i] = (a[i] || 0) + 1; in the context of JavaScript objects.

1. Accessing or Creating a Property:

a[i] attempts to access a property in the object a using the character i as the key.
2. Handling Missing Property:

a[i] || 0: This is a concise way to handle the case where the property i doesn't exist in the object a.
If a[i] is undefined (because the property doesn't exist), the expression evaluates to 0.
If a[i] has a value, it retains that value.
3. Incrementing the Count:

(a[i] || 0) + 1:
If the property i doesn't exist, it starts with a count of 0.
If the property exists, it increments the existing count by 1.
4. Assigning the Count:

a[i] = ...: This line assigns the calculated count back to the property i in the object a.
In simpler terms:

This line of code efficiently checks if a property exists in the object. If it doesn't, it creates the property and initializes its value to 1. If it exists, it increments the existing value by 1.

Example:

JavaScript

let a = {}; 
a['x'] = (a['x'] || 0) + 1; // a['x'] is undefined, so it becomes 1
a['x'] = (a['x'] || 0) + 1; // a['x'] is 1, so it becomes 2
a['y'] = (a['y'] || 0) + 1; // a['y'] is undefined, so it becomes 1

console.log(a); // Output: { x: 2, y: 1 }

*/

//5.Write a JavaScript functions that generates all combination of strings.