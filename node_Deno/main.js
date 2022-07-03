var name = "zhang";
var obj = {
  age: 18,
  name: "why",
};
setTimeout(() => {
  // exports.name = "lisi";
  // console.log(obj.age);
  console.log(exports.name);
}, 5000);
exports.name = name;
exports.obj = obj;
