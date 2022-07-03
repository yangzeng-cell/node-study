const { Buffer } = require("buffer");

const message = "hello world";

const buffer = Buffer.from(message);

console.log(buffer);

const mess = buffer.toString();

console.log(mess);

const alloc = Buffer.alloc(8);
alloc[0] = 88; //十进制
alloc[1] = 0x88; //16进制

console.log(alloc);
