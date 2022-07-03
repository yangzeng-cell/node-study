// 读取图片并写入另外一个文件
const fs = require("fs");
fs.readFile("../img/0.jpg", (err, data) => {
  console.log(data);
  fs.writeFile("1.png", data, (err) => {
    console.log(err);
  });
});
