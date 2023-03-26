// Javascript waits for None

// function x() {
//     var i=2;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("bhushan");
// }
// x()   // first print bhushan then after 3 sec prints i


for (let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },(i*(i+1)*1000))
}