const EventEmitter = require("events");

const emitter = new EventEmitter();

function onclick(...args) {
  console.log("点击1", args);
}

emitter.on("click", onclick);

emitter.on("click", (...args) => {
  console.log([args]);
});
//可以使用一个事件，执行不同的回调函数
emitter.emit("click", "zhangsan", "lisi");

emitter.off("click", onclick); //取消监听，是removeListener的别名
emitter.emit("click", "coderwhy", "james", "kobe");
