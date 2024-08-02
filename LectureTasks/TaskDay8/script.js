let numbers = [2, 5, 4, 6, 7];

let sum = numbers.reduce((acc, cur)=>{
    return  acc + cur;
})
console.log(sum);

//write a callback function
function myname(){
   return 'Priyanshu';
}

function calling(){
    console.log('My name is :', myname());
}

calling();

//learning promise 

let promise = new Promise((resolve, reject)=>{
    var a = false;
    if(a){
        resolve("Promise resolved");
    }
    else{
        reject("Promise rejected")
    }
})
promise.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})