//Finding prime number(Normal Function)
/*
function isPrime(a){
    let Count=1;
    for(let i=2;i<=a;i++){
        if(a%i==0){
            Count++;
        }
    }
    if(Count===2){
        return `${a} is Prime`        
    }
    else{
        return `${a} is not Prime`    
    }
} 
let b=5; //ParseInt(prompt()); -m: user Input
console.log(isPrime(b));  
*/

/*Arrow Functions-Mostly for single line Function definition,bt can also be used for multi line function definitions as well*/

/*
let Cube= (a)=>{ return `the Cube value is ${a*a*a}`;
}
console.log(Cube(4));
*/

/*Call back functions- a function can be passed as an argument to another function */
let result=(s,m,b,c,d)=>{
   return s(b,c,d)*m(b,c,d)

}

let sum=(a,b,c)=>a+b+c;
let mul=(a,b,c)=>a*b*c;
console.log(result(sum,mul,2,3,4));