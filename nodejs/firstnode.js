console.log("node js started");

// how to export data from different file

let exportdata = require("./example")
console.log(exportdata.x , exportdata.y , exportdata.z);
exportdata.f()