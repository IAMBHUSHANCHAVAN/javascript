// what is callback function

function x(y){
    y()
}
x( function y(){
    console.log("hello")
    // here fnc y is a callback function
})

// javascript is single threaded and  synchronous language 


// addEventListener

// here the entire code  was wrapped inside a function(listingevent) so that count can be acted as a closure

function listingevent(){


let count = 0;  
document.getElementById("btn").addEventListener("click", function aa(){
    console.log("clicked",++count)
})
document.getElementById("btn1").addEventListener("click", function ba(){
    console.log("clicked",--count)
})
}
listingevent();


// people usually remove eventlisteners because it takes memory 
// eg in above case count is stored because it cannot be removed since any one can click at any time on this Button we have to update it 
