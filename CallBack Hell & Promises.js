/*callback hell- callback inside callback inside callback...(callback Chaining) is know as call back hell
                 makes the code more complex and Difficult to understand, In order to avoid this proises were introduced 
*/
function walking(callback){
    
        setTimeout(()=>{
            let a=true;
            if(a){
                
            callback('U completed walking')
            }else{
                callback('U didnt do walking')
            }
        },2000)
        
    
}

function cooking(callback){
   
        setTimeout(()=>{
            let b=false;
            if(b){
        
            callback('U completed cooking')
            }else{
                callback('U didnt do cooking')
            }
        },1500)
        
    
}

function cleaning(callback){
   
        setTimeout(()=>{
            let c=false;
            if(c){
        
            callback('U completed cleaning')
            }else{
                callback('U didnt do cleaning')
            }
        },3000)
        
    
}

walking((message)=>{
    console.log(message)
    cooking((message)=>{
        console.log(message)
        cleaning((message)=>{
            console.log(message)

        })
    })
})




/*promises--> Its an object that handles asynchronous operation
              was used to avoid callback hell or to improvise callback chaining
              syntax: eturn new promise((resolve, reject),()=>{Asynchronous function})
 */


/*              
function alarm(t){
    return new Promise((resolve,reject)=>{
       

        if(t<0 || typeof t !="number"){
            reject('this is not a valid number please enter a valid number ')
        }
        else{
            console.log('Alarm Start')
            setTimeout(()=>{
                resolve('tring Tring! Wake up')
            },t)
        }
    })
}

let t=5000

alarm(t).then((message)=>console.log(message)).catch((error)=>console.log(error))

*/

/*
function walking(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('U completed walking')
        },2000)
    })
}

function cooking(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('U completed cooking')
        },1500)
    })
}

function cleaning(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('U completed cleaning')
        },3000)
    })
}

//promises chaining

walking().then((message)=>{
    console.log(message);return cooking()
}).then((message)=>{console.log(message);return cleaning()}).then((message)=>{console.log(message)}).catch((error)=>{console.log(error)})

*/

//Promise.all([walking(),cooking(),cleaning()]).then((m)=>{console.log(m)})

/*


function walking(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a=true;
            if(a){
            resolve('U completed walking')
            }else{
                reject('U didnt do walking')
            }
        },2000)
    })
}

function cooking(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let b=false;
            if(b){
            resolve('U completed cooking')
            }else{
                reject('U didnt do cooking')
            }
        },1500)
    })
}

function cleaning(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let c=false;
            if(c){
            resolve('U completed cleaning')
            }else{
                reject('U didnt do cleaning')
            }
        },3000)
    })
}

//promises chaining

walking().then((message)=>{
    console.log(`walking: ${message}`);return cooking()
}).catch(error=>{console.log(`walking: ${error}`)})
.then((message)=>{console.log(`cooking: ${message}`);return cleaning()}).catch(error=>{console.log(`cooking: ${error}`)})
.then((message)=>{console.log(`cleaning: ${message}`)}).catch((error)=>{console.log(`cleaning: ${error}`)})
*/