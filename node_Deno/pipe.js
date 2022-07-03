const fs = require("fs");

const reader = fs.createReadStream("./book.txt");
const writer = fs.createWriteStream("./5.txt");

// reader.on("data", (data) => {
//   writer.write(data, (err) => {
//     return err;
//   });
// });

reader.pipe(writer);
