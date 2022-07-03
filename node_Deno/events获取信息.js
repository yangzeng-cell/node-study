const EventEmitter = require("events");

const emitter = new EventEmitter();

function listener1() {
  console.log("监听clcik1");
}
function listener2() {
  console.log("监听clcik2");
}
function listener3() {
  console.log("监听clcik1");
}

emitter.on("click", listener1);
emitter.on("tap", listener2);

// 获取注册事件名字
console.log(emitter.eventNames());
// 获取注册事件的数量
console.log(emitter.listenerCount("click"));
//获取注册事件的回调函数
console.log(emitter.listeners("click"));
// 返回当前 EventEmitter对象的最大监听器数量，可以通过setMaxListeners()来修改，默认是10
console.log(emitter.getMaxListeners());
