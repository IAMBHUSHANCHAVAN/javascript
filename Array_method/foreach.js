// The forEach() method executes a provided function once for each array element.

// we have to pass a parameter inside a foreach function ---  example -- .forEach((e) => console.log(e)) -- here e is a parameter


const array1 = [
    {
        name:"bhushan",
        age:"25",
        gender:"male"
    },
    {
        name:"chetan",
        age:"25",
        gender:"female"
    }
];

array1.forEach((element) => console.log(element.name));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



const fruits = ["apple", "orange", "cherry"];
fruits.forEach(e => console.log(e));
