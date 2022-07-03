const fs = require("fs");

fs.readFile("./book.txt", (err, data) => {
  console.log(data);
  console.log(data.toString());
});
// 如果没有定义encoding，则会输出二进制的编码，可以使用data.toString()来转换成utf8编码，因为toString默认就是utf8
fs.readFile("./book.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});
