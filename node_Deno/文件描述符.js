const fs = require("fs");
fs.open("./book.txt", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(fd);
  // 通过描述符去获取文件的信息

  fs.fstat(fd, (err, stats) => {
    console.log(stats);
  });
});
