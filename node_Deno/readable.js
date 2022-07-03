const fs = require("fs");
const read = fs.createReadStream("./fs.js", {
  start: 3,
  end: 8,
  highWaterMark: 2,
});
console.log(read);
//监听数据的读取
read.on("data", (data) => {
  console.log(data);
  // 读取暂停
  read.pause();
  setTimeout(() => {
    read.resume(); //读取恢复
  }, 2000);
});
// 监听文件的打开
read.on("open", (fd) => console.log("文件被打开"));
//监听文件的关闭
read.on("close", () => console.log("监听文件被关闭"));
// 监听读取结束
read.on("end", () => {
  console.log("监听读取结束");
});
