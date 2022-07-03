const bar = require("./main.js");

// name = "zhangsan";
// console.log(name);
// bar.obj.age = 30;
bar.name = "zhangsa";
setTimeout(() => {
  // console.log(bar.obj.age);
  console.log(bar.name);
}, 10000);
