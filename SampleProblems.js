/*
1.Print 16 table using loop like 1x16=16, 2x16=32
2.Print 1 to 10, when the number is odd print (1 is odd) and is even (2 is even)
3.pattern printing
1
12
123
1234 print this pattern using any loop
4.Reverse a number 123, output 321
5.Print prime number 1 to 100
*/
//1.
/*
let tables=(a)=>{
    let i=1;
    while(i<13){
          console.log(`${i}*${a}=`+i*a);  
        i++;
    }
}
 
console.log(tables(16));
*/

//2.
/*
let a=+prompt();
let Isodd =(b)=>{
    for(let i=1;i<=b;i++){
        if(i%2!==0){
            console.log(`${i} is odd`);
        }
        else{
            console.log(`${i} is Even`);
        }
    }
}
console.log(Isodd(a));
*/ 

//5.
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

//3.
/*
let a=+prompt();
for(let i=1;i<=a;i++){
    for(let j=1;j<=i;j++){
        console.log(j);
    }
    console.log("");
} 
*/

//4.
/*
let a = +prompt("Enter a number: ");
let rev = (b) => {
  let c, result = 0;
  while (b>0) {
    c = b % 10;
    b =Math.floor(b/10);
    result = (result*10)+c;
  }
  return result;
};
console.log(rev(a));
*/