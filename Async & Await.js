/*
Async=> makes a function return a promise (either th resole or the reject)
Await=> makes the async function to wait for a promise (mostly used to assign the resolved or rejected data into a varible 
or use it further in other functions)
 --Used with the Promises 
*/


function walking(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a=true;
            if(a){
            resolve('U completed walking')
            } else {
                reject('U didnt do walking')
            }
        }, 2000)
    })
}

function cooking() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let b = false;
            if (b) {
                resolve('U completed cooking')
            } else {
                reject('U didnt do cooking')
            }
        }, 1500)
    })
}

function cleaning() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let c = false;
            if (c) {
                resolve('U completed cleaning')
            } else {
                reject('U didnt do cleaning')
            }
        }, 3000)
    })
}

//promises chaining

/*
    walking().then((result)=>{
        console.log(result);
        cooking().then((res)=> {console.log(res);
            cleaning().then().catch()
        }).catch(error=> console.log(error))
    }).catch(error=> console.log(error))
*/
    async function myWork(){

        try{
        const walk = await walking();
        console.log(walk)

        const cook = await cooking();
        console.log(cook)

        const clean = await cleaning();
        console.log(clean)
        }
        catch(error){
            console.log(error)
        }
    }

    //async function result(){
    //   await myWork()
    //}
    //result()
    //myWork()

    function generateCombinations(input) {
        const results = [];
     
        function combine(prefix, remaining) {
            for (let i = 0; i < remaining.length; i++) {
                const newPrefix = prefix + remaining[i];
                results.push(newPrefix);
                combine(newPrefix, remaining.slice(i + 1));
            }
        }
     
        combine("", input);
        return results;
    }
     
    // Example usage:
    const inputString = "abc";
    const combinations = generateCombinations(inputString);
    //console.log(combinations);
     
     

    function hello(){

        setTimeout(()=>{
            console.log("hi")
        },2000)


        setTimeout(()=>{
            console.log("how are u")
        },1500)

        setTimeout(()=>{
            console.log("bye")
        },1000)

    }

   // hello()


    async function sum(a,b){
        setTimeout(()=>{
            return(a+b)
        },3000)
    }

    async function multi(c){
        setTimeout(()=>{
            return(c*10)
        },3000)
    }
    
    
    async function result(){
        const res=await sum(20,30);
        console.log(res)
        const fin= await multi(res);
        console.log(fin)
    }

   result()
