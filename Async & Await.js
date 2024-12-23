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
     
     
//working of setTimeout Function
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

// async & await with setTimeout and promise 

    function sum(a,b){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
       resolve (a+b)
    },3000)})
   }

   function mul(c){
    return new Promise((resolve,reject)=> {setTimeout(()=>{
        resolve (c*100)
     },2000)})
    }

   async function result(){
    try{
    const s= await sum(10,20)
    console.log(s)

    const m= await mul(s)
    console.log(m)
    }catch(e){
        console.log(e)
    }finally{
        console.log(`Code Finished`)
    }

   }

   //result()

// fetch value from api call 
    async function fetchData() {
    const response =await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  }
 /* 
 //know the await working order 
 console.log('1')
 console.log('booked')
 fetchData();
 console.log('2')
 */


 // A function to fetch data from an API using async & await with then and catch(promises)
async function fetchData(url) {
    try {
      const response = await fetch(url); // Await the fetch promise
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Await the JSON parsing promise
      return data; // Return the parsed data
    } catch (error) {
      return error; // Re-throw the error for the caller to handle
    }
  }

  
  const apiURL = 'https://jsonplaceholder.typicode.com/posts/999999'; // Example API URL ( valid api-https://jsonplaceholder.typicode.com/posts)
  
  fetchData(apiURL)
    .then((data) => {
      console.log('Fetched Data:', data); // Handle resolved promise
    })
    .catch((error) => {
      console.error('Error in API call:', error); // Handle rejected promise
    });
