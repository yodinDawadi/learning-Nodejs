const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// console.log("1");
// console.log("2");

//Non-Blocking....
// fs.readFile("about.txt","utf-8",(err,result)=>{
//     console.log(result);
// });
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");