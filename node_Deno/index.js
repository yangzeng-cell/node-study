// console.log(process);
// console.log(__dirname);
// console.log(__filename);

var obj = {
  age: 1,
  obj1: {
    name: "zhangsan",
  },
};
var target = {};
Object.assign(target, obj);

console.log(target === obj);
console.log(target.obj1 === obj.obj1);

