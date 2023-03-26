let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2")
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },3000)
})
// let al = Promise.all([p1,p2,p3])
// al.then((value)=>{
//     console.log(value);
// })                               return all after 3 seconds
p1.then((value)=>{
    console.log(value);
})