const fs = require("fs")
fs.writeFileSync("index.html","hello")
fs.appendFileSync("index.html","this is added")
const data = fs.readFileSync("index.html").toString()  // will convert buffer into data 
console.log(data);