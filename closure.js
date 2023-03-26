// closure a function bind together with its lexical environment
// it has access to itd parent lexical scope

// function x(){
//     var a =7;
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// // return y
// x()  // 7

// // function x(){
//     var a =7;
//     function y(){
//         console.log(a)
//     }
//     return y // same as y()
// } 

//   can also be returned as 
// function x(){
//     var a =7;
//     return function y(){   -- directly return fnc
//         console.log(a)
//     }
// }

// var z = x()
// console.log(z)  // return function on y 
// z(); // here function along with its lexical scope was returned so 7
//  // now it will check what is there in z -- so it will see x() so it will print 7 
//  // return fnc y along with its value i.e 7 bcause here we invoke its 

