const express = require("express");

const app = express();
app.use(express.json());
app.post("/user", (req, res, next) => {
  console.log(req.body);
  res.end("Coderwhy, Welcome Back~");
});

app.listen(8000, () => {
  console.log("express初体验服务器启动成功~");
});
