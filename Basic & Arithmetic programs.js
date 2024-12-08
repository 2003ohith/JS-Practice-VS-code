//1..Write a JavaScript program to display the current day and time in any format.

function dayanddate(){
let a=new Date();
let time=`${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`//24 hours format
let daynum=a.getDay()
let day=''
switch(daynum){
    case 0:
        day="Sunday"
        break;
    case 1:  
        day="Monday"
         break;
    case 2:  
        day="Tuesday"
        break;  
    case 3:  
        day="Wednesday"
        break;    
    case 4:  
        day="Thursday"
        break;  
    case 5:  
        day="Friday"
        break; 
    case 6:  
        day='Saturday'
        break;                  
}

return(`current time in 12hr format is ${a.toLocaleTimeString()} and the 24 hrs format is ${time} and today is ${day}`)//12 hrs format
}

console.log(dayanddate())


//2.Write a JavaScript program to get current date.
function currentdate(){
    let a=new Date()
    return `Todays Date is ${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`
}
console.log(currentdate())

//3.3.Write a JavaScript program to return the sum of two numbers.

function sum(a,b){
    return `the sum of two numbers is ${a+b}`
}

console.log(sum(30,40))

//4.Write a JavaScript program to find the aria of triangle.

function TriArea(b,h){
    return `The are of the Triangle is ${0.5*b*h}SqUnits`
}

console.log(TriArea(10,20))

//5.Write a JavaScript program to calculate multiplication and division of two numbers.

function multiordiv(a,b,c){
    switch(c){
        case '*':
            return `The multiple of the numbers are ${a*b}`
            break;
        case '/':
            return `The division of the numbers are ${a/b}`
            break;
        default:
            return `No such operator but the and multiple of the numbers are ${a*b} and the Division of the numbers are ${a/b}`    

    }
}

console.log(multiordiv(10,20,"*"))

//6.Write a JavaScript program to find the entered year is leap year or not.
/*
let a=parseInt(prompt())

function isleap(a){
    if((a%4===0 && a%100!=0) || a%400===0){
        return `${a} is a leap year`
    }
    else{
        return `${a} is not a leap year`
    }
}

console.log(isleap(a))
*/

//7.Write a JavaScript program to check two given numbers, whether one is positive and another one is negative.

function posandneg(a,b){
    if(a>=0 && b<0){
        return `${a} is +ve and (${b}) is -ve`
    }
    else if(a<0 && b>=0){
        return `(${a}) is -ve and ${b} is +ve`
    }
    else{
        return `Both ${a} and ${b} are like terms `
    }
}

console.log(posandneg(10,-2))

//8.Write a JavaScript program to find the odd and even numbers between 1-100.
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
console.log(Isodd(a))
*/

