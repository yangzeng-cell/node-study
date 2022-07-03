const fs = require("fs");
const writer = fs.createWriteStream("./book.txt", {
  flags: "r+",
  start: 8,
});

writer.write("你好啊", (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("写入成功");
});

writer.write("李银河", (err) => {
  console.log("第二次写入");
});
// 关闭文件
writer.end("Hello World");
// 监听文件关闭
writer.on("close", () => {
  console.log("文件被关闭");
});
