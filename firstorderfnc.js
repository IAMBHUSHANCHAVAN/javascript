//                                                  function statement 


// a() -----  in function statement the 'a' will print before initialization due to hoisting
function a() {
    console.log('a');
}
a() // a    
//                                              function expression


// b() -----  in function expression the 'b()' will give error before initialization due to hoisting which is the major diff between fnc statement and fnc exp
var b = function () {
    console.log('b');
}
b() // b


//                                    function decelaration  --  function statement are also called as function decleration

//                                    anonymous function   -- fnc without any name is anonymous function 


var c = function () {   // --- you can assign anonymous fnc to any variable
    console.log("c");
}
c()// c


//                                       named function expression --- same as function expression but has a name to it 

var b = function xyx() {
    console.log('b');
}
b() // b
//xyz() // will give an error - reference error 

//                                          difference between parameter and arguments


// var b = function (parameter1 , parameter2) {
//     console.log('b');
// }
// b(1,2) ---- this are arguments


//                                      first class function

function sayHello() {
    console.log(() => {
        console.log("Hello!");
    });
}
sayHello()