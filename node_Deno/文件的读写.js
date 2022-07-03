const fs = require("fs");

//文件的写入
const content = "hello world";

fs.writeFile("./book.txt", content, { flag: "a" }, (err) => {
  console.log(err);
});

// 文件的读取
fs.readFile("./book.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});
