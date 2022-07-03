const fs = require("fs");
const path = require("path");

const dirname = "./why";
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, (err) => {
    console.log(err);
  });
}
const dirname1 = "../node_deno";
//读取文件夹中的所有文件
fs.readdir(dirname1, (err, files) => {
  console.log(files); //但是如果里面还有文件夹的话不会读取
});
// 递归读取文件夹里的所有文件
function readAllFiles(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      if (file.isDirectory()) {
        const filepath = path.resolve(dirname, file.name);
        readAllFiles(filepath);
      } else {
        console.log(file.name);
      }
    });
  });
}

readAllFiles(dirname1);

// 文件重命名,也可以对目录进行重命名
fs.rename("./why", "./code", (err) => {
  console.log(err);
});
