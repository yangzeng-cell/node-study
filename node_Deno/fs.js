const fs = require("fs");
console.log("start");

const state = fs.statSync("./book.txt");

console.log(state, "这个是同步读取");

fs.stat("./book.txt", (err, state) => {
  if (err) {
    console.log(err);
    throw new Error(err);
  }
  console.log(state, "这个是异步代码");
});

fs.promises.stat("./book.txt").then((state) => {
  console.log(state, "这是promise执行的方式");
});
